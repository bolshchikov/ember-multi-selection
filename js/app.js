/**
 * @name
 * @fileOverview
 * @author sergey
 */
(function () {
  window.App = Ember.Application.create({
    cities: ['Moscow', 'New York', 'Toronto', 'Paris', 'Berlin', 'Tel Aviv'],
    selected: []
  });

  App.MultiSelectionComponent = Ember.Component.extend({
    classNames: ['multi-selection-container'],
    SelectionContainer: Ember.View.extend({
      classNames: ['selection-container']
    }),
    DropdownMenu: Ember.View.extend({})
  });
})();
