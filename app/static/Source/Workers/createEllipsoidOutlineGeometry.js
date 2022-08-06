/* This file is automatically rebuilt by the Cesium build process. */
define(['./defaultValue-94c3e563', './EllipsoidOutlineGeometry-8e1632db', './Transforms-3ac41eb6', './Matrix2-fc7e9822', './RuntimeError-c581ca93', './ComponentDatatype-4a60b8d6', './WebGLConstants-7dccdc96', './_commonjsHelpers-3aae1032-f55dc0c4', './combine-761d9c3f', './GeometryAttribute-a441ff32', './GeometryAttributes-7df9bef6', './GeometryOffsetAttribute-ec11b721', './IndexDatatype-db156785'], (function (defaultValue, EllipsoidOutlineGeometry, Transforms, Matrix2, RuntimeError, ComponentDatatype, WebGLConstants, _commonjsHelpers3aae1032, combine, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, IndexDatatype) { 'use strict';

  function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
    if (defaultValue.defined(ellipsoidGeometry.buffer)) {
      ellipsoidGeometry = EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.unpack(
        ellipsoidGeometry,
        offset
      );
    }
    return EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidOutlineGeometry;

}));
