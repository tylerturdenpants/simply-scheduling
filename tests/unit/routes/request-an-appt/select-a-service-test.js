import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | request-an-appt/select-a-service', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:request-an-appt/select-a-service');
    assert.ok(route);
  });
});
