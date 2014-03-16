/**
 * @name
 * @fileOverview
 * @author sergey
 */
(function () {
  window.App = Ember.Application.create({
    cities: ['Moscow', 'New York', 'Toronto', 'Paris', 'Berlin', 'Tel Aviv', 'Boston', 'Hamburg', 'London', 'Haifa', 'Novosibirsk'],
    selected: ['Moscow', 'New York']
  });

  App.MultiSelectionComponent = Ember.Component.extend({
    classNames: ['multi-selection-container'],

    showCounter: function () {
      return this.get('values.length') > 1;
    }.property('values.length'),

    isOpened: false,

    SelectionContainer: Ember.View.extend({
      classNames: ['selection-container'],
      valuesRepresentation: function () {
        return this.get('controller.values').join(', ');
      }.property('controller.values.@each'),
      click: function () {
        this.toggleProperty('controller.isOpened');
      }
    }),
    DropdownMenu: Ember.CollectionView.extend({
      tagName: 'ul',
      classNames: ['dropdown-menu'],
      contentBinding: 'controller.content',
      valuesBinding: 'controller.values',
      isVisible: function () {
        return this.get('controller.isOpened');
      }.property('controller.isOpened'),
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
    }),

    Layer: Ember.View.extend({
      classNames: ['layer'],
      isVisible: function () {
        return this.get('controller.isOpened');
      }.property('controller.isOpened'),
      click: function () {
        this.set('controller.isOpened', false);
      }
    })
  });
})();
