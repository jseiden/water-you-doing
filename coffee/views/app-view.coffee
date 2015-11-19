class AppView extends Backbone.View

  initialize: ->
    @render() 
  
  render: -> 
    $(@el).append "<p>main</p>"


module.exports = AppView 

