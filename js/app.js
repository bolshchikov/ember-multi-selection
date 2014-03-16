/**
 * @name
 * @fileOverview
 * @author sergey
 */
(function () {
  window.App = Ember.Application.create({
    cities: ['Moscow', 'New York', 'Toronto', 'Paris', 'Berlin', 'Tel Aviv'],
    selected: ['Moscow', 'New York']
  });

  App.MultiSelectionComponent = Ember.Component.extend({
    classNames: ['multi-selection-container'],

    SelectionContainer: Ember.View.extend({
      classNames: ['selection-container'],
      valuesRepresentation: function () {
        return this.get('parentView.values').join(', ');
      }.property('parentView.values.@each'),
      showCounter: function () {
        return this.get('parentView.values.length') > 1;
      }.property('parentView.values.length')
    }),
    DropdownMenu: Ember.CollectionView.extend({
      tagName: 'ul',
      classNames: ['dropdown-menu'],
      contentBinding: 'parentView.content',
      valuesBinding: 'parentView.values',
      itemViewClass: Ember.View.extend({
        templateName: 'dropdown-item',
        isSelected: function () {
          return this.get('parentView.values').contains(this.content);
        }.property('parentView.values.@each'),
        click: function () {
          if (!this.get('parentView.values').contains(this.content)) {
            this.get('parentView.values').pushObject(this.content);
            this.set('isSelected', true);
          }
          else {
            this.get('parentView.values').removeObject(this.content);
            this.set('isSelected', false);
          }
        }
      })
    })
  });
})();
