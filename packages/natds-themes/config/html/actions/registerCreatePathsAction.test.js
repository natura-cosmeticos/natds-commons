import fs from 'fs'
import registerCreatePathsAction, { createPaths, deletePaths, dataBuilderFunction } from './registerCreatePathsAction'
import * as createOutputPathInfo from '../../shared/helpers'

jest.mock('fs')
jest.mock('../../shared/helpers')

describe('registerCreatePathsAction', () => {
  it('should return create paths action', () => {
    const createPathsAction = registerCreatePathsAction()

    expect(typeof createPathsAction.do).toBe('function')
    expect(typeof createPathsAction.undo).toBe('function')
    expect(createPathsAction.name).toEqual('create_paths_html')
  })

  describe('createPaths', () => {
    it('should call createOutputPathInfo function', () => {
      const sampleConfig = {
        buildPath: 'build/html/brand/',
        files: [{ destination: 'mode.html' }]
      }

      jest.spyOn(createOutputPathInfo, 'createOutputPathInfo')

      createPaths(null, sampleConfig)

      expect(createOutputPathInfo.createOutputPathInfo).toHaveBeenCalled()
    })
  })

  describe('deletePaths', () => {
    it('should delete the html docs paths file', () => {
      deletePaths()

      expect(fs.unlinkSync).toHaveBeenCalledWith('build/html/paths.json')
    })
  })

  describe('dataBuilderFunction', () => {
    it('should return the name of the theme and path', () => {
      const config = {
        buildPath: 'build/html/avon/',
        files: [
          {
            destination: 'light.html',
            filter: 'privateProperties',
            format: 'html/colors'
          }
        ]
      }

      const result = dataBuilderFunction({}, config)

      expect(result).toEqual([{
        name: 'avon light',
        path: '/avon/light.html'
      }])
    })
  })
})
