import Check from "../../Core/Check.js";

/**
 * Rendering statistics for a single model
 *
 * @alias ModelExperimentalStatistics
 * @constructor
 *
 * @see Cesium3DTilesetStatistics
 *
 * @private
 */
export default function ModelExperimentalStatistics() {
  /**
   * Total number of points across all POINTS primitives in this model
   *
   * @type {Number}
   * @private
   */
  this.pointsLength = 0;

  /**
   * Total number of triangles across all TRIANGLES, TRIANGLE_STRIP or
   * TRIANGLE_FAN primitives in this model
   *
   * @type {Number}
   * @private
   */
  this.trianglesLength = 0;

  /**
   * Total size of all geometry buffers in bytes. This accounts for the vertex
   * attributes (which includes feature IDs and property attributes),
   * and index buffers of all the model's primitives. Any attributes generated
   * by the pipeline are included in this total.
   *
   * @type {Number}
   * @private
   */
  this.geometryByteLength = 0;

  /**
   * Total size of all textures in bytes. This includes materials,
   * feature ID textures, and property textures.
   *
   * @type {Number}
   * @private
   */
  this.texturesByteLength = 0;

  /**
   * Total size of property tables, including the batch textures used for
   * picking and styling.
   *
   * @type {Number}
   * @private
   */
  this.propertyTablesByteLength = 0;

  // Sets of buffers and textures we've already counted, so we don't
  // double-count cached assets.
  this.bufferIdSet = {};
  this.textureIdSet = {};
}

/**
 * Reset the memory counts for this model. This should be called each time the
 * draw command pipeline is rebuilt.
 *
 * @private
 */
ModelExperimentalStatistics.prototype.clear = function () {
  this.pointsLength = 0;
  this.trianglesLength = 0;
  this.geometryByteLength = 0;
  this.texturesByteLength = 0;
  this.propertyTablesByteLength = 0;

  this.bufferIdSet = {};
  this.textureIdSet = {};
};

ModelExperimentalStatistics.prototype.addBuffer = function (
  buffer,
  hasCpuCopy
) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.object("buffer", buffer);
  Check.typeOf.bool("hasCpuCopy", hasCpuCopy);
  //>>includeEnd('debug');

  if (!this.bufferIdSet.hasOwnProperty(buffer._id)) {
    // If there's a CPU copy, we need to count the memory twice
    const copies = hasCpuCopy ? 2 : 1;
    this.geometryByteLength += buffer.sizeInBytes * copies;
  }

  // Simulate set insertion
  this.bufferIdSet[buffer._id] = true;
};

ModelExperimentalStatistics.prototype.addTexture = function (texture) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.object("texture", texture);
  //>>includeEnd('debug');

  if (!this.textureIdSet.hasOwnProperty(texture._id)) {
    this.texturesByteLength += texture.sizeInBytes;
  }

  // Simulate set insertion
  this.textureIdSet[texture._id] = true;
};
