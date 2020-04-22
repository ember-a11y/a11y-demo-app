import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | addons/ember-moment', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:addons/ember-moment');
    assert.ok(route);
  });
});
