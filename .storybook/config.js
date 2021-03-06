import { configure, setAddon } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

setAddon(JSXAddon)
// look in src for files that end in '.stories.js'
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
	require('./welcomeStory')
	req.keys().forEach(file => req(file))
}

configure(loadStories, module)
