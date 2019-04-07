import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | date-and-time', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:date-and-time');
    assert.ok(route);
  });
});
