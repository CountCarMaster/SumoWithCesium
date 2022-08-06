/* This file is automatically rebuilt by the Cesium build process. */
define(['./BoxGeometry-9a897756', './defaultValue-94c3e563', './Transforms-3ac41eb6', './Matrix2-fc7e9822', './RuntimeError-c581ca93', './ComponentDatatype-4a60b8d6', './WebGLConstants-7dccdc96', './_commonjsHelpers-3aae1032-f55dc0c4', './combine-761d9c3f', './GeometryAttribute-a441ff32', './GeometryAttributes-7df9bef6', './GeometryOffsetAttribute-ec11b721', './VertexFormat-e46f29d6'], (function (BoxGeometry, defaultValue, Transforms, Matrix2, RuntimeError, ComponentDatatype, WebGLConstants, _commonjsHelpers3aae1032, combine, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, VertexFormat) { 'use strict';

  function createBoxGeometry(boxGeometry, offset) {
    if (defaultValue.defined(offset)) {
      boxGeometry = BoxGeometry.BoxGeometry.unpack(boxGeometry, offset);
    }
    return BoxGeometry.BoxGeometry.createGeometry(boxGeometry);
  }

  return createBoxGeometry;

}));
