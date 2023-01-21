(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.playList_F848215F_D40D_B0FE_41A9_0ABEDC0FD9E8.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Bathroom_03",
 "hfov": 360,
 "overlays": [
  "this.overlay_F738831E_D413_707E_41D1_5CC23F021DEE",
  "this.overlay_F2A64D07_D413_F04F_41E5_8FE94D831EEC",
  "this.panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_tcap0"
 ],
 "id": "panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 143.7,
   "class": "AdjacentPanorama",
   "yaw": 39.06,
   "panorama": "this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Bedroom_01_02",
 "hfov": 360,
 "overlays": [
  "this.overlay_FD209396_D413_504E_41D4_0C23EC76A5A2",
  "this.overlay_F18B2030_D414_B042_41E5_17943FA6351B",
  "this.overlay_F0C62B4C_D415_F0C2_41CC_E27B7EA2ABDA",
  "this.overlay_F0D592CD_D415_51C3_41E9_6AA2803433FC",
  "this.overlay_FD69147B_D414_B0C6_41CA_B4A6AF0EE41F",
  "this.overlay_FC25FD5C_D414_B0C1_41DF_EC98E3CE247D",
  "this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_tcap0"
 ],
 "id": "panorama_CAD81203_D415_B047_41CE_655D0FC84DD9",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 81.9,
   "class": "AdjacentPanorama",
   "yaw": -79.26,
   "panorama": "this.panorama_F52B7802_D415_F046_41D5_45B1791F0080",
   "distance": 1
  },
  {
   "backwardYaw": 74.36,
   "class": "AdjacentPanorama",
   "yaw": 0.13,
   "panorama": "this.panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9",
   "distance": 1
  },
  {
   "backwardYaw": -112.3,
   "class": "AdjacentPanorama",
   "yaw": -162.54,
   "panorama": "this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -164.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F979D2DD_D40D_B1C2_41E5_1CD06010C5A1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -179.87,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F80231E2_D40D_B3C6_41D7_99DDAB049863",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "viewerArea": "this.MainViewer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Bedroom_01",
 "hfov": 360,
 "overlays": [
  "this.overlay_FD70E566_D417_F0C1_41E2_81822DF3F1BA",
  "this.overlay_F15E387A_D417_70C1_41D0_948ED8FCC89E",
  "this.panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_tcap0"
 ],
 "id": "panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.13,
   "class": "AdjacentPanorama",
   "yaw": 74.36,
   "panorama": "this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 67.7,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8E5D224_D40D_B042_41AB_061BAE63A9E8",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -14.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8C1E253_D40D_B0C6_41DA_02CD3562F01F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -110.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F936930E_D40D_B05E_41C7_AEE2FF9C548A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F52B7802_D415_F046_41D5_45B1791F0080_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 99.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F89BC2C4_D40D_B1C2_41E6_88A0F223491A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -140.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9AE4372_D40D_B0C6_41C5_7CA01FB2454D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Bathroom_01",
 "hfov": 360,
 "overlays": [
  "this.overlay_F1907D30_D41F_D041_41E3_97CDDFE370F5",
  "this.overlay_F219815B_D41C_D0C6_41CE_F4F00F4CCFC0",
  "this.panorama_F52B7802_D415_F046_41D5_45B1791F0080_tcap0"
 ],
 "id": "panorama_F52B7802_D415_F046_41D5_45B1791F0080",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.26,
   "class": "AdjacentPanorama",
   "yaw": 81.9,
   "panorama": "this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -36.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8BDD2AB_D40D_B046_41CB_AB1C90AF9DF3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 175.35,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F96A12D0_D40D_B1C2_41DA_F4B649B0B764",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 135.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8ADA295_D40D_B042_41E8_53351EE9249F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Living_Panorama_01",
 "hfov": 360,
 "overlays": [
  "this.overlay_F70485C9_D473_D3C3_41E4_26DE18B5A642",
  "this.overlay_F6B35AA2_D40C_F046_41E6_FC27EF15A8E0",
  "this.overlay_F7708A9B_D40D_5047_41C3_AD3A25578129",
  "this.overlay_CBC570DE_D40D_F1FE_41CC_E69F8A1D04D9",
  "this.overlay_F4199471_D40F_50C2_41D2_C7C6065E6540",
  "this.overlay_F742557E_D40F_50C1_41E5_6DCA383BFB10",
  "this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_tcap0"
 ],
 "id": "panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -4.65,
   "class": "AdjacentPanorama",
   "yaw": 63.43,
   "panorama": "this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D",
   "distance": 1
  },
  {
   "backwardYaw": 15.45,
   "class": "AdjacentPanorama",
   "yaw": 151.49,
   "panorama": "this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA",
   "distance": 1
  },
  {
   "backwardYaw": 15.45,
   "class": "AdjacentPanorama",
   "yaw": -159.78,
   "panorama": "this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA",
   "distance": 1
  },
  {
   "backwardYaw": -3.64,
   "class": "AdjacentPanorama",
   "yaw": -44.47,
   "panorama": "this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 17.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F914A327_D40D_B04E_41D6_733F280C99A3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 98.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F838C1CA_D40D_B3C6_41DE_6B1AD29A53F0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -18.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F823218B_D40D_B046_41E5_F2CA35EC0B13",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 21.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F904631A_D40D_B046_41C1_3A2A43292440",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -105.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F81A820D_D40D_B042_41E2_901E0E0FCC56",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_camera",
   "media": "this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_camera",
   "media": "this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_camera",
   "media": "this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194_camera",
   "media": "this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_camera",
   "media": "this.panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F52B7802_D415_F046_41D5_45B1791F0080_camera",
   "media": "this.panorama_F52B7802_D415_F046_41D5_45B1791F0080",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_camera",
   "media": "this.panorama_CA27AF28_D415_F042_41DD_30280E5E78B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_camera",
   "media": "this.panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_camera",
   "media": "this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_camera",
   "media": "this.panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_camera",
   "media": "this.panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C9CA2521_D415_5043_41C5_630D46B8F729_camera",
   "media": "this.panorama_C9CA2521_D415_5043_41C5_630D46B8F729",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_camera",
   "media": "this.panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_camera",
   "media": "this.panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -49.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8CFC265_D40D_B0C2_41E5_8C2C1D8D0BCF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -18.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F82E71AC_D40D_B042_41DD_566616D1BD5D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -107.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8DFF27D_D40D_B0C2_41DC_8F07FBEE0D08",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Bedroom_02",
 "hfov": 360,
 "overlays": [
  "this.overlay_FF26DDC1_D414_F3C2_41AD_083B209B114B",
  "this.overlay_F101942D_D415_7043_41E7_E0576BA28416",
  "this.panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_tcap0"
 ],
 "id": "panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 82.27,
   "class": "AdjacentPanorama",
   "yaw": 72.92,
   "panorama": "this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_t.jpg"
},
{
 "class": "PlayList",
 "id": "playList_F848215F_D40D_B0FE_41A9_0ABEDC0FD9E8",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_FD422CCF_D40C_B1DD_41E4_D44FD8D202C0",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -140.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9A0A365_D40D_B0C2_41DC_73FDB84D9F29",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Maid room01",
 "hfov": 360,
 "overlays": [
  "this.overlay_F1DD0BA6_D413_504F_41E1_9389EEF23C04",
  "this.overlay_F1FC5CB3_D413_5046_41E4_6C64C04C957E",
  "this.panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_tcap0"
 ],
 "id": "panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -81.02,
   "class": "AdjacentPanorama",
   "yaw": -68.96,
   "panorama": "this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -28.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9E20334_D40D_B042_41EA_64A975DE0637",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Bedroom_03",
 "hfov": 360,
 "overlays": [
  "this.overlay_FEAEE11B_D415_B046_41E5_7843C1F02D0F",
  "this.overlay_F2FD1FC3_D415_4FC6_41DC_95828F52BBE7",
  "this.panorama_C9CA2521_D415_5043_41C5_630D46B8F729_tcap0"
 ],
 "id": "panorama_C9CA2521_D415_5043_41C5_630D46B8F729",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.89,
   "class": "AdjacentPanorama",
   "yaw": 130.86,
   "panorama": "this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -164.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F94812E9_D40D_B1C2_41D9_86ACEA20DB54",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Store 01",
 "hfov": 360,
 "overlays": [
  "this.overlay_F1C82AC6_D413_71CE_41E0_6C918EC144FD",
  "this.overlay_FF8D4DAF_D40C_D05E_41D6_3EA80DB26C8F",
  "this.overlay_F19B06DC_D40D_71C2_41B8_C04C8F5094D7",
  "this.panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_tcap0"
 ],
 "id": "panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 161.41,
   "class": "AdjacentPanorama",
   "yaw": -158.77,
   "panorama": "this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA",
   "distance": 1
  },
  {
   "backwardYaw": 161.41,
   "class": "AdjacentPanorama",
   "yaw": 168.19,
   "panorama": "this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9CA2521_D415_5043_41C5_630D46B8F729_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 176.36,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F957D2F6_D40D_B1CE_41E1_EC3F770879D0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 100.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F88B92B7_D40D_B04E_41A1_B37F55EAC585",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Living_Panorama_02",
 "hfov": 360,
 "overlays": [
  "this.overlay_F5B20CF5_D474_B1C2_41E3_D7B025C659FA",
  "this.overlay_CA27DA90_D477_5042_41DD_07776002D5CE",
  "this.overlay_CA20055A_D477_50C1_41DA_A2C3D5B6DE99",
  "this.overlay_F4861844_D475_B0C2_4194_1DF51A6522E6",
  "this.overlay_CB388E21_D475_7042_41C6_E77423F45348",
  "this.overlay_F79650EC_D474_D1C2_41D6_7FA880D46880",
  "this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0"
 ],
 "id": "panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.77,
   "class": "AdjacentPanorama",
   "yaw": 161.41,
   "panorama": "this.panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E",
   "distance": 1
  },
  {
   "backwardYaw": -162.54,
   "class": "AdjacentPanorama",
   "yaw": -112.3,
   "panorama": "this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9",
   "distance": 1
  },
  {
   "backwardYaw": 151.49,
   "class": "AdjacentPanorama",
   "yaw": 15.45,
   "panorama": "this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Kitchen_Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_F6115B38_D41D_D041_41E4_18F69F4720B7",
  "this.overlay_F2C2EDF7_D41C_D3CF_41E8_BD6565C7CA53",
  "this.overlay_F198DA7E_D41F_70BE_41C2_B311BE4AC24E",
  "this.panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_tcap0"
 ],
 "id": "panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 69.59,
   "class": "AdjacentPanorama",
   "yaw": 166.94,
   "panorama": "this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D",
   "distance": 1
  },
  {
   "backwardYaw": 69.59,
   "class": "AdjacentPanorama",
   "yaw": -162.67,
   "panorama": "this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_t.jpg"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 1080,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Apt_01_Top 01",
 "id": "map_FD422CCF_D40C_B1DD_41E4_D44FD8D202C0",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_FD422CCF_D40C_B1DD_41E4_D44FD8D202C0.png",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   },
   {
    "url": "media/map_FD422CCF_D40C_B1DD_41E4_D44FD8D202C0_lq.png",
    "width": 341,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 192
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "width": 1920,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "class": "Map",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_FD422CCF_D40C_B1DD_41E4_D44FD8D202C0_t.png",
 "initialZoomFactor": 1
},
{
 "class": "PlayList",
 "id": "playList_F849E15F_D40D_B0FE_41E8_7B76F2B747D2",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_FD422CCF_D40C_B1DD_41E4_D44FD8D202C0",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 38.19,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8F1523C_D40D_B042_41DF_7297B2F9FE4B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Bathroom_02",
 "hfov": 360,
 "overlays": [
  "this.overlay_F26C6FBF_D41D_4FBE_41C7_9F237BB2C625",
  "this.overlay_F7950060_D41C_D0C2_41E9_17789A890E5E",
  "this.panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_tcap0"
 ],
 "id": "panorama_CA27AF28_D415_F042_41DD_30280E5E78B0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -141.81,
   "class": "AdjacentPanorama",
   "yaw": 165.18,
   "panorama": "this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CA33CBA4_D414_B042_41E2_7D6472791194_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -13.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9F25340_D40D_B0C2_41C3_2215CBAB2515",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -97.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9BEA37E_D40D_B0BE_41B1_D799F1FF42B1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Living_007",
 "hfov": 360,
 "overlays": [
  "this.overlay_F47D23A2_D40C_D046_41D6_131F0FCB1AEF",
  "this.overlay_F2196CA1_D40D_B042_41DE_33F3EA3180B6",
  "this.overlay_F1873459_D40C_B0C2_41DE_7EB3F45B6F21",
  "this.overlay_F6850C6C_D413_50C1_41B5_E4D131AF5F27",
  "this.overlay_F4A202DE_D413_51C1_41DF_8A734F818670",
  "this.overlay_F06A1D7E_D414_F0BE_41E2_53A2A81CCEBA",
  "this.overlay_F063CE95_D415_7042_41D5_A2F8AD5AF467",
  "this.overlay_F15120AB_D415_5047_41CE_CD141C9B60F4",
  "this.overlay_F7A00C2F_D415_505E_41D3_363C10933FC5",
  "this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_tcap0"
 ],
 "id": "panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 166.94,
   "class": "AdjacentPanorama",
   "yaw": 69.59,
   "panorama": "this.panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648",
   "distance": 1
  },
  {
   "backwardYaw": -68.96,
   "class": "AdjacentPanorama",
   "yaw": -81.02,
   "panorama": "this.panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA",
   "distance": 1
  },
  {
   "backwardYaw": 63.43,
   "class": "AdjacentPanorama",
   "yaw": -4.65,
   "panorama": "this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04",
   "distance": 1
  },
  {
   "backwardYaw": 39.06,
   "class": "AdjacentPanorama",
   "yaw": 143.7,
   "panorama": "this.panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850",
   "distance": 1
  },
  {
   "backwardYaw": 39.06,
   "class": "AdjacentPanorama",
   "yaw": -163.55,
   "panorama": "this.panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Apartment_01_Living_Panorama_04",
 "hfov": 360,
 "overlays": [
  "this.overlay_F0ED5118_D417_7042_41C7_3FA6A544BA57",
  "this.overlay_F2C699E3_D417_B3C6_41E0_B04DB1F9FBE9",
  "this.overlay_F6137EA7_D417_F04E_41CA_83773937AACA",
  "this.overlay_F11EC702_D415_7046_41B3_CFE67457C491",
  "this.overlay_F2366811_D413_5042_41D4_62818E0E6E76",
  "this.overlay_F6D5FD53_D41C_B0C7_41C8_645C59E6A362",
  "this.overlay_F2607CB1_D41C_F042_41DD_615331096F39",
  "this.overlay_F093ADBA_D41D_7046_41E6_D686A03B0ECA",
  "this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194_tcap0"
 ],
 "id": "panorama_CA33CBA4_D414_B042_41E2_7D6472791194",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 165.18,
   "class": "AdjacentPanorama",
   "yaw": -141.81,
   "panorama": "this.panorama_CA27AF28_D415_F042_41DD_30280E5E78B0",
   "distance": 1
  },
  {
   "backwardYaw": 130.86,
   "class": "AdjacentPanorama",
   "yaw": -80.89,
   "panorama": "this.panorama_C9CA2521_D415_5043_41C5_630D46B8F729",
   "distance": 1
  },
  {
   "backwardYaw": 72.92,
   "class": "AdjacentPanorama",
   "yaw": 82.27,
   "panorama": "this.panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5",
   "distance": 1
  },
  {
   "backwardYaw": -44.47,
   "class": "AdjacentPanorama",
   "yaw": -3.64,
   "panorama": "this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -98.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F80DB1FA_D40D_B3C6_41CE_EFEC123C7237",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -110.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9261302_D40D_B046_41E9_1C4AE0BE0A81",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 111.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9C0734D_D40D_B0C2_41E9_4166EAD5D4AC",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -116.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9D00359_D40D_B0C2_41E2_79681B3ADDA6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 50,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 641,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "bottom": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 118,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 },
 "scrollBarOpacity": 0.5
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0.06%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "28.528%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "44.974%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": "7.14%",
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "visible": false,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "width": "12.364%",
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 3,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderColor": "#000000",
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;font-family:'Montserrat Medium';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Entrance"
 },
 "height": "6.811%"
},
{
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "width": "12.364%",
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 3,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderColor": "#000000",
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Living Room"
 },
 "height": "6.811%"
},
{
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "width": "12.364%",
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 3,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderColor": "#000000",
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Kitchen"
 },
 "height": "6.811%"
},
{
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "width": "12.364%",
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 3,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderColor": "#000000",
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Bedroom 1"
 },
 "height": "6.811%"
},
{
 "id": "HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "width": "12.364%",
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 3,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderColor": "#000000",
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Bedroom 2"
 },
 "height": "6.811%"
},
{
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "width": "12.364%",
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 3,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderColor": "#000000",
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Bathroom"
 },
 "height": "6.811%"
},
{
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D, this.camera_F8BDD2AB_D40D_B046_41CB_AB1C90AF9DF3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.06,
   "hfov": 40.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_1_HS_0_1_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -13
  }
 ],
 "id": "overlay_F738831E_D413_707E_41D1_5CC23F021DEE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 39.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_1_HS_1_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 123
     }
    ]
   },
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.32
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.2,
   "hfov": 10.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -0.95
  }
 ],
 "id": "overlay_F2A64D07_D413_F04F_41E5_8FE94D831EEC",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F52B7802_D415_F046_41D5_45B1791F0080, this.camera_F80DB1FA_D40D_B3C6_41CE_EFEC123C7237); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.26,
   "hfov": 73.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_0_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -13.58
  }
 ],
 "id": "overlay_FD209396_D413_504E_41D4_0C23EC76A5A2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA, this.camera_F8E5D224_D40D_B042_41AB_061BAE63A9E8); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.54,
   "hfov": 40.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_1_1_0_map.gif",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -12.88
  }
 ],
 "id": "overlay_F18B2030_D414_B042_41E5_17943FA6351B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB38736_D435_704E_41D6_53B60F5C915E",
   "yaw": -167.36,
   "pitch": -2.28,
   "distance": 100,
   "hfov": 8.7
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.36,
   "hfov": 8.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.28
  }
 ],
 "id": "overlay_F0C62B4C_D415_F0C2_41CC_E27B7EA2ABDA",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -74.48,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ]
   },
   "pitch": -5.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.03
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.48,
   "hfov": 9.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -5.22
  }
 ],
 "id": "overlay_F0D592CD_D415_51C3_41E9_6AA2803433FC",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9, this.camera_F81A820D_D40D_B042_41E2_901E0E0FCC56); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.13,
   "hfov": 83.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_4_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.01
  }
 ],
 "id": "overlay_FD69147B_D414_B0C6_41CA_B4A6AF0EE41F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB0E736_D435_704E_41DC_E454541BDEE3",
   "yaw": -3.62,
   "pitch": -26.32,
   "distance": 100,
   "hfov": 7.24
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.62,
   "hfov": 7.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.32
  }
 ],
 "id": "overlay_FC25FD5C_D414_B0C1_41DF_EC98E3CE247D",
 "data": {
  "label": "Circle Point 01c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9, this.camera_F80231E2_D40D_B3C6_41D7_99DDAB049863); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.36,
   "hfov": 57.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_1_HS_0_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -1.89
  }
 ],
 "id": "overlay_FD70E566_D417_F0C1_41E2_81822DF3F1BA",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB14736_D435_704E_41E8_F33A575A2890",
   "yaw": 81.54,
   "pitch": -25.18,
   "distance": 100,
   "hfov": 7.76
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.54,
   "hfov": 7.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.18
  }
 ],
 "id": "overlay_F15E387A_D417_70C1_41D0_948ED8FCC89E",
 "data": {
  "label": "Circle Point 01c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9, this.camera_F88B92B7_D40D_B04E_41A1_B37F55EAC585); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.9,
   "hfov": 44.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_1_HS_0_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -12.87
  }
 ],
 "id": "overlay_F1907D30_D41F_D041_41E3_97CDDFE370F5",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 81.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_1_HS_1_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ]
   },
   "pitch": -0.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.06
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.28,
   "hfov": 8.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F52B7802_D415_F046_41D5_45B1791F0080_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -0.7
  }
 ],
 "id": "overlay_F219815B_D41C_D0C6_41CE_F4F00F4CCFC0",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F52B7802_D415_F046_41D5_45B1791F0080_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA, this.camera_F979D2DD_D40D_B1C2_41E5_1CD06010C5A1); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.49,
   "hfov": 60.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_1_HS_0_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -8.82
  }
 ],
 "id": "overlay_F70485C9_D473_D3C3_41E4_26DE18B5A642",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA, this.camera_F94812E9_D40D_B1C2_41D9_86ACEA20DB54); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.78,
   "hfov": 42.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_1_HS_1_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -10.34
  }
 ],
 "id": "overlay_F6B35AA2_D40C_F046_41E6_FC27EF15A8E0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D, this.camera_F96A12D0_D40D_B1C2_41DA_F4B649B0B764); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.43,
   "hfov": 33.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_1_HS_2_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.45
  }
 ],
 "id": "overlay_F7708A9B_D40D_5047_41C3_AD3A25578129",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194, this.camera_F957D2F6_D40D_B1CE_41E1_EC3F770879D0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.47,
   "hfov": 33.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_1_HS_3_1_0_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -0.44
  }
 ],
 "id": "overlay_CBC570DE_D40D_F1FE_41CC_E69F8A1D04D9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE88472B_D435_7046_41D5_1A3406B5227C",
   "yaw": -50.9,
   "pitch": -21.7,
   "distance": 100,
   "hfov": 5.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.9,
   "hfov": 5.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.7
  }
 ],
 "id": "overlay_F4199471_D40F_50C2_41D2_C7C6065E6540",
 "data": {
  "label": "Circle Point 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE88E72B_D435_7046_41DE_D0A4B37560E3",
   "yaw": 69.55,
   "pitch": -22.07,
   "distance": 100,
   "hfov": 5.84
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.55,
   "hfov": 5.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_1_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.07
  }
 ],
 "id": "overlay_F742557E_D40F_50C1_41E5_6DCA383BFB10",
 "data": {
  "label": "Circle Point 01c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194, this.camera_F9BEA37E_D40D_B0BE_41B1_D799F1FF42B1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.92,
   "hfov": 33.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_1_HS_0_1_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -7.76
  }
 ],
 "id": "overlay_FF26DDC1_D414_F3C2_41AD_083B209B114B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB1D73C_D435_7042_41E6_3D016A57A77B",
   "yaw": 65.23,
   "pitch": -2.25,
   "distance": 100,
   "hfov": 4.25
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.23,
   "hfov": 4.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.25
  }
 ],
 "id": "overlay_F101942D_D415_7043_41E7_E0576BA28416",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D, this.camera_F838C1CA_D40D_B3C6_41DE_6B1AD29A53F0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_F1DD0BA6_D413_504F_41E1_9389EEF23C04",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEBE973E_D435_70BE_41D4_0BDCFC783B2D",
   "yaw": -62.22,
   "pitch": 1.74,
   "distance": 100,
   "hfov": 10.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.22,
   "hfov": 10.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_1_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.74
  }
 ],
 "id": "overlay_F1FC5CB3_D413_5046_41E4_6C64C04C957E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194, this.camera_F89BC2C4_D40D_B1C2_41E6_88A0F223491A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.86,
   "hfov": 67.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_1_HS_0_1_0_map.gif",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -12.27
  }
 ],
 "id": "overlay_FEAEE11B_D415_B046_41E5_7843C1F02D0F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEBE373D_D435_7042_41DB_274DAB9013A9",
   "yaw": 134.97,
   "pitch": -1.88,
   "distance": 100,
   "hfov": 5.73
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.97,
   "hfov": 5.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.88
  }
 ],
 "id": "overlay_F2FD1FC3_D415_4FC6_41DC_95828F52BBE7",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C9CA2521_D415_5043_41C5_630D46B8F729_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA, this.camera_F823218B_D40D_B046_41E5_F2CA35EC0B13); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.77,
   "hfov": 51.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_1_HS_0_1_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -12.5
  }
 ],
 "id": "overlay_F1C82AC6_D413_71CE_41E0_6C918EC144FD",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEBFF73F_D435_70BE_41CB_3653EF49AEE7",
   "yaw": -169.62,
   "pitch": 0.99,
   "distance": 100,
   "hfov": 8.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.62,
   "hfov": 8.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.99
  }
 ],
 "id": "overlay_FF8D4DAF_D40C_D05E_41D6_3EA80DB26C8F",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA, this.camera_F82E71AC_D40D_B042_41DD_566616D1BD5D); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.19,
   "hfov": 27.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_1_HS_2_1_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -14.63
  }
 ],
 "id": "overlay_F19B06DC_D40D_71C2_41B8_C04C8F5094D7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04, this.camera_F9E20334_D40D_B042_41EA_64A975DE0637); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_F5B20CF5_D474_B1C2_41E3_D7B025C659FA",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E, this.camera_F904631A_D40D_B046_41C1_3A2A43292440); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.41,
   "hfov": 44.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_1_1_6_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -15.14
  }
 ],
 "id": "overlay_CA27DA90_D477_5042_41DD_07776002D5CE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CAD81203_D415_B047_41CE_655D0FC84DD9, this.camera_F914A327_D40D_B04E_41D6_733F280C99A3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.3,
   "hfov": 77.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_2_1_6_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -11.05
  }
 ],
 "id": "overlay_CA20055A_D477_50C1_41DA_A2C3D5B6DE99",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE8A3729_D435_7042_41E1_46BF2A102040",
   "yaw": -113.97,
   "pitch": -4.92,
   "distance": 100,
   "hfov": 8.42
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.97,
   "hfov": 8.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.92
  }
 ],
 "id": "overlay_F4861844_D475_B0C2_4194_1DF51A6522E6",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE8AD72A_D435_7046_41E3_3191BE9D7034",
   "yaw": 165.13,
   "pitch": -5.92,
   "distance": 100,
   "hfov": 8.41
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.13,
   "hfov": 8.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.92
  }
 ],
 "id": "overlay_CB388E21_D475_7042_41C6_E77423F45348",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE8A972A_D435_7046_41C9_62A130517996",
   "yaw": -0.3,
   "pitch": -24.87,
   "distance": 100,
   "hfov": 7.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.3,
   "hfov": 7.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_5_0_6_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.87
  }
 ],
 "id": "overlay_F79650EC_D474_D1C2_41D6_7FA880D46880",
 "data": {
  "label": "Circle Point 01c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D, this.camera_F9261302_D40D_B046_41E9_1C4AE0BE0A81); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.94,
   "hfov": 27.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_1_HS_0_1_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -8.98
  }
 ],
 "id": "overlay_F6115B38_D41D_D041_41E4_18F69F4720B7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D, this.camera_F936930E_D40D_B05E_41C7_AEE2FF9C548A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.67,
   "hfov": 36.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_1_HS_1_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -7.73
  }
 ],
 "id": "overlay_F2C2EDF7_D41C_D3CF_41E8_BD6565C7CA53",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB50734_D435_7042_41DA_EA137548EA3E",
   "yaw": -171.63,
   "pitch": 1.74,
   "distance": 100,
   "hfov": 6.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.63,
   "hfov": 6.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.74
  }
 ],
 "id": "overlay_F198DA7E_D41F_70BE_41C2_B311BE4AC24E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA33CBA4_D414_B042_41E2_7D6472791194, this.camera_F8F1523C_D40D_B042_41DF_7297B2F9FE4B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.18,
   "hfov": 32.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_1_HS_0_1_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -14.76
  }
 ],
 "id": "overlay_F26C6FBF_D41D_4FBE_41C7_9F237BB2C625",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 167.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_1_HS_1_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 131
     }
    ]
   },
   "pitch": -1.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.82,
   "hfov": 8.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -1.57
  }
 ],
 "id": "overlay_F7950060_D41C_D0C2_41E9_17789A890E5E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CA27AF28_D415_F042_41DD_30280E5E78B0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648, this.camera_F9F25340_D40D_B0C2_41C3_2215CBAB2515); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.59,
   "hfov": 93.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_0_1_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -12.68
  }
 ],
 "id": "overlay_F47D23A2_D40C_D046_41D6_131F0FCB1AEF",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850, this.camera_F9A0A365_D40D_B0C2_41DC_73FDB84D9F29); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_F2196CA1_D40D_B042_41DE_33F3EA3180B6",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE89372B_D435_7046_41E1_D3AD0DA23494",
   "yaw": 66.03,
   "pitch": 4.88,
   "distance": 100,
   "hfov": 8.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.03,
   "hfov": 8.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.88
  }
 ],
 "id": "overlay_F1873459_D40C_B0C2_41DE_7EB3F45B6F21",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 163.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_3_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 7.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.23
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.31,
   "hfov": 11.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 7.71
  }
 ],
 "id": "overlay_F6850C6C_D413_50C1_41B5_E4D131AF5F27",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CAAFA52E_D415_D041_41AA_3EB6CD5F6850, this.camera_F9AE4372_D40D_B0C6_41C5_7CA01FB2454D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_4_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_4_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_4_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_F4A202DE_D413_51C1_41DF_8A734F818670",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA, this.camera_F9C0734D_D40D_B0C2_41E9_4166EAD5D4AC); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.02,
   "hfov": 39.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_5_1_6_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -9.51
  }
 ],
 "id": "overlay_F06A1D7E_D414_F0BE_41E2_53A2A81CCEBA",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB62732_D435_7046_41E3_05BF6A491162",
   "yaw": -79.18,
   "pitch": -4.42,
   "distance": 100,
   "hfov": 6.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.18,
   "hfov": 6.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.42
  }
 ],
 "id": "overlay_F063CE95_D415_7042_41D5_A2F8AD5AF467",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04, this.camera_F9D00359_D40D_B0C2_41E2_79681B3ADDA6); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.65,
   "hfov": 88.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_0_HS_7_1_0_map.gif",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.52
  }
 ],
 "id": "overlay_F15120AB_D415_5047_41CE_CD141C9B60F4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB6C732_D435_7046_41D7_382529883AD3",
   "yaw": -17.18,
   "pitch": -24.08,
   "distance": 100,
   "hfov": 5.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.18,
   "hfov": 5.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_8_0_6_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.08
  }
 ],
 "id": "overlay_F7A00C2F_D415_505E_41D3_363C10933FC5",
 "data": {
  "label": "Circle Point 01c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA27AF28_D415_F042_41DD_30280E5E78B0, this.camera_F8C1E253_D40D_B0C6_41DA_02CD3562F01F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_F0ED5118_D417_7042_41C7_3FA6A544BA57",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C9CA2521_D415_5043_41C5_630D46B8F729, this.camera_F8CFC265_D40D_B0C2_41E5_8C2C1D8D0BCF); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.89,
   "hfov": 70.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0_HS_1_1_0_map.gif",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -11.31
  }
 ],
 "id": "overlay_F2C699E3_D417_B3C6_41E0_B04DB1F9FBE9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5, this.camera_F8DFF27D_D40D_B0C2_41DC_8F07FBEE0D08); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.27,
   "hfov": 83.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_2_1_6_map.gif",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -11.75
  }
 ],
 "id": "overlay_F6137EA7_D417_F04E_41CA_83773937AACA",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04, this.camera_F8ADA295_D40D_B042_41E8_53351EE9249F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0_HS_3_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0_HS_3_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_F11EC702_D415_7046_41B3_CFE67457C491",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB79733_D435_7046_41CD_742308836D38",
   "yaw": 24.46,
   "pitch": -21.54,
   "distance": 100,
   "hfov": 6.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.46,
   "hfov": 6.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_4_0_6_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.54
  }
 ],
 "id": "overlay_F2366811_D413_5042_41D4_62818E0E6E76",
 "data": {
  "label": "Circle Point 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB40733_D435_7046_41D8_41AAFC0F7087",
   "yaw": -79.3,
   "pitch": -3.66,
   "distance": 100,
   "hfov": 10.44
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.3,
   "hfov": 10.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.66
  }
 ],
 "id": "overlay_F6D5FD53_D41C_B0C7_41C8_645C59E6A362",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FEB4F734_D435_7042_419D_63D4D8CDCC7A",
   "yaw": 82.23,
   "pitch": -4.16,
   "distance": 100,
   "hfov": 10.44
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.23,
   "hfov": 10.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.16
  }
 ],
 "id": "overlay_F2607CB1_D41C_F042_41DD_615331096F39",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -138.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0_HS_7_0.png",
      "width": 148,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ]
   },
   "pitch": -8.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.19
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.66,
   "hfov": 13.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_0_HS_7_0_6_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.49
  }
 ],
 "id": "overlay_F093ADBA_D41D_7046_41E6_D686A03B0ECA",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CA33CBA4_D414_B042_41E2_7D6472791194_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 110,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": "91.304%",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "horizontalAlign": "center",
 "bottom": "0%",
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "height": "85.959%"
},
{
 "children": [
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 30,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": 1199,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "Container",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "bottom": "0%",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": 51,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "scrollBarOpacity": 0.5
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEB38736_D435_704E_41D6_53B60F5C915E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_FEB0E736_D435_704E_41DC_E454541BDEE3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CAD81203_D415_B047_41CE_655D0FC84DD9_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_FEB14736_D435_704E_41E8_F33A575A2890",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA78CB5D_D415_D0C3_41DF_CBABD61358E9_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_FE88472B_D435_7046_41D5_1A3406B5227C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_FE88E72B_D435_7046_41DE_D0A4B37560E3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA2460F4_D415_51C2_41C1_88B2C78EDC04_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEB1D73C_D435_7042_41E6_3D016A57A77B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C9DD9F01_D415_B043_41EA_6DCC2F4C5CD5_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEBE973E_D435_70BE_41D4_0BDCFC783B2D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA2CF767_D414_D0CE_41BE_6A87897A1EDA_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEBE373D_D435_7042_41DB_274DAB9013A9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C9CA2521_D415_5043_41C5_630D46B8F729_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEBFF73F_D435_70BE_41CB_3653EF49AEE7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA938E4C_D414_D0C2_41E5_6A73A0B5E91E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FE8A3729_D435_7042_41E1_46BF2A102040",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FE8AD72A_D435_7046_41E3_3191BE9D7034",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_FE8A972A_D435_7046_41C9_62A130517996",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA2F49D3_D415_53C6_41C5_C0C861105CEA_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEB50734_D435_7042_41DA_EA137548EA3E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C9CB0EFA_D415_51C6_41E0_742A9CD80648_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FE89372B_D435_7046_41E1_D3AD0DA23494",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEB62732_D435_7046_41E3_05BF6A491162",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_FEB6C732_D435_7046_41D7_382529883AD3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CB3B56ED_D415_71C2_41D2_59AFEB7E335D_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_FEB79733_D435_7046_41CD_742308836D38",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEB40733_D435_7046_41D8_41AAFC0F7087",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FEB4F734_D435_7042_419D_63D4D8CDCC7A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CA33CBA4_D414_B042_41E2_7D6472791194_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "height": 60,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 }
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 113,
 "borderRadius": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 12,
 "label": "FLOORPLAN",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "height": 49,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button floorplan"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
}],
 "class": "Player",
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "unregisterKey": function(key){  delete window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
