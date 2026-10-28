/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function getArea() {
    return this.width * this.height;
  };
}

/**
 * Returns the JSON representation of specified object
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 */
function fromJSON(proto, json) {
  return Object.assign(Object.create(proto), JSON.parse(json));
}

/**
 * Css selectors builder
 */
class Selector {
  constructor() {
    this.parts = [];
  }

  checkOrder(type) {
    const order = {
      element: 1,
      id: 2,
      class: 3,
      attr: 4,
      pseudoClass: 5,
      pseudoElement: 6,
    };

    const currentOrder = order[type];
    const lastOrder = this.parts.length > 0
      ? order[this.parts[this.parts.length - 1].type]
      : 0;

    if (currentOrder < lastOrder) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    if (['element', 'id', 'pseudoElement'].includes(type)) {
      if (this.parts.some((p) => p.type === type)) {
        throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
      }
    }
  }

  element(value) {
    this.checkOrder('element');
    this.parts.push({ type: 'element', value });
    return this;
  }

  id(value) {
    this.checkOrder('id');
    this.parts.push({ type: 'id', value: `#${value}` });
    return this;
  }

  class(value) {
    this.checkOrder('class');
    this.parts.push({ type: 'class', value: `.${value}` });
    return this;
  }

  attr(value) {
    this.checkOrder('attr');
    this.parts.push({ type: 'attr', value: `[${value}]` });
    return this;
  }

  pseudoClass(value) {
    this.checkOrder('pseudoClass');
    this.parts.push({ type: 'pseudoClass', value: `:${value}` });
    return this;
  }

  pseudoElement(value) {
    this.checkOrder('pseudoElement');
    this.parts.push({ type: 'pseudoElement', value: `::${value}` });
    return this;
  }

  stringify() {
    return this.parts.map((p) => p.value).join('');
  }
}

const cssSelectorBuilder = {
  element(value) {
    return new Selector().element(value);
  },

  id(value) {
    return new Selector().id(value);
  },

  class(value) {
    return new Selector().class(value);
  },

  attr(value) {
    return new Selector().attr(value);
  },

  pseudoClass(value) {
    return new Selector().pseudoClass(value);
  },

  pseudoElement(value) {
    return new Selector().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    const combined = new Selector();
    // В тестах для комбинатора ' ' ожидается 3 пробела, для остальных — по одному с каждой стороны
    const comb = combinator === ' ' ? '   ' : ` ${combinator} `;
    combined.parts = [{
      type: 'combined',
      value: `${selector1.stringify()}${comb}${selector2.stringify()}`,
    }];
    return combined;
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
