/* This file is automatically rebuilt by the Cesium build process. */
define(['./CylinderGeometry-31990f10', './defaultValue-94c3e563', './Transforms-3ac41eb6', './Matrix2-fc7e9822', './RuntimeError-c581ca93', './ComponentDatatype-4a60b8d6', './WebGLConstants-7dccdc96', './_commonjsHelpers-3aae1032-f55dc0c4', './combine-761d9c3f', './CylinderGeometryLibrary-7b029c87', './GeometryAttribute-a441ff32', './GeometryAttributes-7df9bef6', './GeometryOffsetAttribute-ec11b721', './IndexDatatype-db156785', './VertexFormat-e46f29d6'], (function (CylinderGeometry, defaultValue, Transforms, Matrix2, RuntimeError, ComponentDatatype, WebGLConstants, _commonjsHelpers3aae1032, combine, CylinderGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, IndexDatatype, VertexFormat) { 'use strict';

  function createCylinderGeometry(cylinderGeometry, offset) {
    if (defaultValue.defined(offset)) {
      cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset);
    }
    return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry);
  }

  return createCylinderGeometry;

}));
