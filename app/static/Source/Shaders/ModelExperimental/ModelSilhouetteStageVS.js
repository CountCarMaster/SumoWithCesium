//This file is automatically rebuilt by the Cesium build process.
export default "void silhouetteStage(in ProcessedAttributes attributes) {\n\
     #ifdef HAS_NORMALS\n\
     if(model_silhouettePass) {\n\
          vec3 normal = normalize(czm_normal3D * attributes.normalMC);\n\
          normal.x *= czm_projection[0][0];\n\
          normal.y *= czm_projection[1][1];\n\
          vec4 clip = gl_Position;\n\
          clip.xy += normal.xy * clip.w * model_silhouetteSize * czm_pixelRatio / czm_viewport.z;\n\
          gl_Position = clip;\n\
    }\n\
    #endif\n\
}";
