import Controller from '@ember/controller';
import {empty, match, not, and } from '@ember/object/computed';
export default Controller.extend({

  ValidEmail: match('emailAddress', /^.+@.+\..+$/),
  Messagesize: empty('message'),
  NotLongMessage: not('isMessageEnoughLong'),
  Validemail: and('ValidEmail', 'NotLongMessage'),

  actions: {
    sendMessage(){
      const email = this.get('emailAddress');
      const message = this.get('message');

      alert('Sending your message... ');

      const responseMessage = 'Your Email: ' + email + ', Your Message: ' + message;
      this.set('responseMessage', responseMessage);

      const newCont = this.store.createRecord('contact', {email: email, message:message});
      newCont.save().then(response => {
        this.set('emailAddress', '');
        this.set('message', '');
      })
    }
  }
});
