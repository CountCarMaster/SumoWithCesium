/* This file is automatically rebuilt by the Cesium build process. */
define(['./Matrix2-fc7e9822', './defaultValue-94c3e563', './EllipseGeometry-0887e9b5', './RuntimeError-c581ca93', './ComponentDatatype-4a60b8d6', './WebGLConstants-7dccdc96', './Transforms-3ac41eb6', './_commonjsHelpers-3aae1032-f55dc0c4', './combine-761d9c3f', './EllipseGeometryLibrary-d3fe9678', './GeometryAttribute-a441ff32', './GeometryAttributes-7df9bef6', './GeometryInstance-97bd792f', './GeometryOffsetAttribute-ec11b721', './GeometryPipeline-a88e5bfc', './AttributeCompression-4d18cc04', './EncodedCartesian3-d3e254ea', './IndexDatatype-db156785', './IntersectionTests-68fbc42d', './Plane-e20fba8c', './VertexFormat-e46f29d6'], (function (Matrix2, defaultValue, EllipseGeometry, RuntimeError, ComponentDatatype, WebGLConstants, Transforms, _commonjsHelpers3aae1032, combine, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryOffsetAttribute, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

}));
