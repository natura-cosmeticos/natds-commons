import https from 'https'
import fs from 'fs'
import * as Figma from 'figma-api';
import svg2vectordrawable from 'svg2vectordrawable';
import writeFile from 'svg2vectordrawable/lib/write-content-to-file';

const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest);
  const request = https
    .get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => file.close(cb(file, null)));
    })
    .on('error', (err) => {
      fs.unlink(dest);
      if (cb) cb(null, err.message);
    });
};

const convertSvgToXml = () => {
  const dirCont = fs.readdirSync('./assets');
  const svgPaths = dirCont.filter((elm) => elm.match(/.*\.svg/ig));
  console.log({ svgPaths })
  Promise
    .all(svgPaths.map(svgPath => {
      console.log({ svgPath })
      const svgFile = fs.readFileSync(`./assets/${svgPath}`)
      return svg2vectordrawable(svgFile)
    }))
    .then(xmlFiles => {
      xmlFiles.forEach((xmlFile, index) => {
        console.log({ xmlFiles: svgPaths[index].replace('.svg', '.xml') });
        writeFile(xmlFile, `./assets/${svgPaths[index].replace('.svg', '.xml')}`)
      });
    })
    .catch(err => console.log(err))



}

const getIdList = (fileNames) => fileNames.map(({ id }) => id).join(',');

const getFileNames = (file) => {
  const fileNames = [];

  file.document.children
    .map(canvas => canvas.children.map(({ id, name }) => fileNames.push({ id, name })))

  return fileNames
}

export const init = async () => {
  const api = new Figma.Api({
    personalAccessToken: '52669-595ece79-f2a9-478b-9224-dfa90de07424',
  });

  try {
    const file = await api.getFile('kefUBb6RvjDrOe804hFNkZ');

    const fileNames = getFileNames(file);
    // console.log(JSON.stringify(file, null, 2));

    const svgOptions = {
      ids: getIdList(fileNames),
      format: 'svg',
      svg_include_id: true,
    }

    // console.log(fileNames)

    const svgPaths = await api.getImage('kefUBb6RvjDrOe804hFNkZ', svgOptions);
    // console.log(JSON.stringify(svgPaths, null, 2));

    if (svgPaths.err || !svgPaths.images) {
      console.log('Nothing to download here')
    }

    if (!fs.existsSync('./assets')) {
      fs.mkdirSync('./assets');
    }

    Object
      .keys(svgPaths.images)
      .forEach((svgId) => {
        const fileName = fileNames.find(svgFile => svgFile.id === svgId).name
        const svgFile = svgPaths.images[svgId];

        download(svgFile, `./assets/${fileName}.svg`, convertSvgToXml)
      })

  } catch (error) {

    console.log(error);
  }


}