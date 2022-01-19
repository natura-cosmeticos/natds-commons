import fs from 'fs'
import { createOutputPathInfo } from './createOutputPathInfo'

jest.mock('fs')

describe('createOutputPathInfo', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should create a file containing build file paths if does not exists', () => {
    const fakeData = { someData: 'someValue' }
    const dataBuilderSpy = jest.fn(() => fakeData)

    fs.existsSync.mockImplementation(false)
    fs.writeFileSync.mockImplementation(() => { })

    createOutputPathInfo('./a-file-path.json', dataBuilderSpy, 'dictionary', 'config')

    expect(dataBuilderSpy).toHaveBeenCalledWith('dictionary', 'config')
    expect(fs.writeFileSync).toHaveBeenCalledWith('./a-file-path.json', JSON.stringify([fakeData]))
  })

  it('should update a file containing build file paths if exists', () => {
    const fileData = [{ someData: 'someValue' }]
    const fakeData = { otherData: 'otherValue' }
    const dataBuilderSpy = jest.fn(() => fakeData)

    fs.existsSync.mockReturnValue(true)
    fs.writeFileSync.mockImplementation(() => { })
    fs.readFileSync.mockImplementation(() => JSON.stringify(fileData))

    const expectedFileContent = [
      ...fileData,
      fakeData
    ]

    createOutputPathInfo('./another-file-path.json', dataBuilderSpy, 'dictionary', 'config')

    expect(dataBuilderSpy).toHaveBeenCalledWith('dictionary', 'config')
    expect(fs.writeFileSync).toHaveBeenCalledWith('./another-file-path.json', JSON.stringify(expectedFileContent))
  })

  it('should concat with existing data if the new data is an array', () => {
    const fileData = ['someValue']
    const fakeData = ['newValue']
    const dataBuilderSpy = jest.fn(() => fakeData)

    fs.existsSync.mockReturnValue(true)
    fs.readFileSync.mockImplementation(() => JSON.stringify(fileData))
    fs.writeFileSync.mockImplementation(() => { })

    createOutputPathInfo('./a-file-path.json', dataBuilderSpy, 'dictionary', 'config')

    const expectedFileContent = [
      'someValue',
      'newValue'
    ]

    expect(dataBuilderSpy).toHaveBeenCalledWith('dictionary', 'config')
    expect(fs.writeFileSync).toHaveBeenCalledWith('./a-file-path.json', JSON.stringify(expectedFileContent))
  })
})
