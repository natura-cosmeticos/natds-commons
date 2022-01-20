import fs from 'fs'
import Handlebars from 'handlebars'
import { formatBuilder } from './formatBuilder'

jest.mock('fs')
jest.mock('handlebars')

const templateDataBuilderSpy = jest.fn()

describe('formatBuilder', () => {
  beforeEach(() => {
    const buffer = Buffer.from('{{template}}', 'utf8')

    fs.readFileSync.mockReturnValue(buffer)
    Handlebars.compile.mockReturnValue(() => 'A template')
  })

  it('should return a format for the given config', () => {
    const format = formatBuilder('format-name', './path/to/template', templateDataBuilderSpy)

    expect(typeof format.formatter).toEqual('function')
    expect(format.name).toEqual('format-name')
  })

  it('should compile the template', () => {
    formatBuilder('format-name', './path/to/template', templateDataBuilderSpy)

    expect(fs.readFileSync).toHaveBeenCalledWith('./path/to/template')
    expect(Handlebars.compile).toHaveBeenCalledWith('{{template}}', { noEscape: true })
  })

  it('should call the given templateDataBuilder funtion in the formatter call', () => {
    const dictionary = 'dictionary'
    const platform = 'platform'

    const format = formatBuilder('format-name', './path/to/template', templateDataBuilderSpy)

    format.formatter(dictionary, platform)
    format.contextOptions = 'a value'

    expect(templateDataBuilderSpy).toHaveBeenCalledWith(dictionary, platform, format)
  })
})
