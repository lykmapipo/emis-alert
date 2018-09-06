'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');


/* declarations */
const Alert =
  require(path.join(__dirname, '..', '..', 'lib', 'alert.model'));


describe('Alert', () => {

  describe('Schema', () => {

    it('should have source field', () => {

      const source = Alert.schema.tree.source;
      const instance = Alert.schema.paths.source.instance;

      expect(instance).to.be.equal('String');
      expect(source).to.exist;
      expect(source).to.be.an('object');
      expect(source.type).to.be.a('function');
      expect(source.type.name).to.be.equal('String');
      expect(source.trim).to.be.true;
      expect(source.required).to.be.true;
      expect(source.index).to.be.true;
      expect(source.searchable).to.be.true;
      expect(source.fake).to.exist;

    });

    it('should have title field', () => {

      const title = Alert.schema.tree.title;
      const instance = Alert.schema.paths.title.instance;

      expect(instance).to.be.equal('String');
      expect(title).to.exist;
      expect(title).to.be.an('object');
      expect(title.type).to.be.a('function');
      expect(title.type.name).to.be.equal('String');
      expect(title.trim).to.be.true;
      expect(title.required).to.be.true;
      expect(title.index).to.be.true;
      expect(title.searchable).to.be.true;
      expect(title.fake).to.exist;

    });

    it('should have description field', () => {

      const description = Alert.schema.tree.description;
      const instance = Alert.schema.paths.description.instance;

      expect(instance).to.be.equal('String');
      expect(description).to.exist;
      expect(description).to.be.an('object');
      expect(description.type).to.be.a('function');
      expect(description.type.name).to.be.equal('String');
      expect(description.trim).to.be.true;
      expect(description.index).to.be.true;
      expect(description.searchable).to.be.true;
      expect(description.fake).to.exist;

    });

    it('should have severity field', () => {

      const severity = Alert.schema.tree.severity;
      const instance = Alert.schema.paths.severity.instance;

      expect(instance).to.be.equal('String');
      expect(severity).to.exist;
      expect(severity).to.be.an('object');
      expect(severity.type).to.be.a('function');
      expect(severity.type.name).to.be.equal('String');
      expect(severity.trim).to.be.true;
      expect(severity.required).to.be.true;
      expect(severity.index).to.be.true;
      expect(severity.default).to.be.exist;
      expect(severity.fake).to.be.exist;

    });

    it('should have direction field', () => {

      const direction = Alert.schema.tree.direction;
      const instance = Alert.schema.paths.direction.instance;

      expect(instance).to.be.equal('String');
      expect(direction).to.exist;
      expect(direction).to.be.an('object');
      expect(direction.type).to.be.a('function');
      expect(direction.type.name).to.be.equal('String');
      expect(direction.trim).to.be.true;
      expect(direction.required).to.be.true;
      expect(direction.index).to.be.true;
      expect(direction.searchable).to.be.true;
      expect(direction.fake).to.exist;

    });

  });

});