/* This file is automatically rebuilt by the Cesium build process. */
define(['./PrimitivePipeline-4e8648b3', './createTaskProcessorWorker', './Transforms-3ac41eb6', './Matrix2-fc7e9822', './RuntimeError-c581ca93', './defaultValue-94c3e563', './ComponentDatatype-4a60b8d6', './WebGLConstants-7dccdc96', './_commonjsHelpers-3aae1032-f55dc0c4', './combine-761d9c3f', './GeometryAttribute-a441ff32', './GeometryAttributes-7df9bef6', './GeometryPipeline-a88e5bfc', './AttributeCompression-4d18cc04', './EncodedCartesian3-d3e254ea', './IndexDatatype-db156785', './IntersectionTests-68fbc42d', './Plane-e20fba8c', './WebMercatorProjection-843df830'], (function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Matrix2, RuntimeError, defaultValue, ComponentDatatype, WebGLConstants, _commonjsHelpers3aae1032, combine, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    const parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    const results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

}));
