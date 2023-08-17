import colors from 'open-color/open-color.json'
import { map } from 'ramda'
import { buildColors } from '../../../config/shared/helpers'

const { gray, red } = map(buildColors)(colors)

const spectrum = { 
  gray, 
  red 
}

module.exports = { spectrum }
