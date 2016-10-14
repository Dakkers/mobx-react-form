import ajv from 'ajv';
import validatorjs from 'validatorjs';
import Form from './_.extend';

// forms
import withNestedFields from './withNestedFields';
import registerSimple from './registerSimple';
import registerMaterial from './registerMaterial';
import companySimple from './companySimple';
import companyWidgets from './companyWidgets';

// plugins extensions
import svkExtend from './extension/svk';
import dvrExtend from './extension/dvr';

const plugins = {
  dvr: {
    package: validatorjs,
    extend: dvrExtend,
  },
  svk: {
    package: ajv,
    extend: svkExtend,
  },
};

class FormWithNestedFields extends Form {

  onInit($form) {
    // console.log('ON INIT');

    // $form.on('validate@email', ({ form, path }) => console.log('validate@email', path, form));
    // $form.on('clear@club', ({ form, path }) => console.log('clear@club', path, form));
    // $form.on('update@club', ({ form, path }) => console.log('update@club', path, form));

    // console.log('GET', $form.$('address').get());

    // console.log($form.get());
    // $form.$('address.street').update('');
    // console.log('street isValid', $form.$('address.street').isValid);
    // console.log('isEmpty', $form.$('address.street').check('isEmpty'));

    // $form.$('members.0.hobbies.1').update('aaa');

    // $form.options({
    //   strictUpdate: true,
    // });

    // $form.set('default', {
    //   sthElse: '...',
    //   club: 'HEYYY',
    // });

    // $form.set('label', {
    //   sthElse: '...',
    //   club: 'NEW LABEL',
    // });

    // $form.update({
    //   club: {
    //     name: 'VVVVVV',
    //     city: 'KKKKKK',
    //   },
    //   members: [{
    //     firstname: 'XXXXXXX',
    //     lastname: 'YYYYYY',
    //     hobbies: ['@@@@@', '######'],
    //   }, {
    //     firstname: 'AAAAAAA',
    //     lastname: 'BBBBB',
    //     hobbies: ['HHHHH', 'NNNNNN'],
    //   }],
    // });

    console.log('@@@VALUES', $form.values());
  }
}

class RegisterMaterialForm extends Form {}
class RegisterSimpleForm extends Form {}
class CompanySimpleForm extends Form {}
class CompanyWidgetsForm extends Form {}

export default {
  withNestedFields: new FormWithNestedFields({
    plugins,
    fields: withNestedFields.fields,
  }),
  registerMaterial: new RegisterMaterialForm({
    plugins,
    fields: registerMaterial.fields,
    schema: registerMaterial.schema,
  }),
  registerSimple: new RegisterSimpleForm({
    plugins,
    fields: registerSimple.fields,
    schema: registerSimple.schema,
  }),
  companySimple: new CompanySimpleForm({
    plugins,
    fields: companySimple.fields,
    schema: companySimple.schema,
    options: { allowRequired: true },
  }),
  companyWidgets: new CompanyWidgetsForm({
    plugins,
    fields: companyWidgets.fields,
    schema: companyWidgets.schema,
  }),
};
