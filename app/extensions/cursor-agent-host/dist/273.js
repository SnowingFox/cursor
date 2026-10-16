/*! For license information please see 273.js.LICENSE.txt */
exports.id = 273, exports.ids = [273], exports.modules = { 690: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.StreamReader = t.EndOfStreamError = void 0;
  var a = i(91524);
  Object.defineProperty(t, "EndOfStreamError", { enumerable: true, get: function() {
    return a.EndOfStreamError;
  } });
  var n = i(34939);
  Object.defineProperty(t, "StreamReader", { enumerable: true, get: function() {
    return n.StreamReader;
  } });
}, 4015: (e) => {
  e.exports = { exif: { 1: "InteropIndex", 2: "InteropVersion", 11: "ProcessingSoftware", 254: "SubfileType", 255: "OldSubfileType", 256: "ImageWidth", 257: "ImageHeight", 258: "BitsPerSample", 259: "Compression", 262: "PhotometricInterpretation", 263: "Thresholding", 264: "CellWidth", 265: "CellLength", 266: "FillOrder", 269: "DocumentName", 270: "ImageDescription", 271: "Make", 272: "Model", 273: "StripOffsets", 274: "Orientation", 277: "SamplesPerPixel", 278: "RowsPerStrip", 279: "StripByteCounts", 280: "MinSampleValue", 281: "MaxSampleValue", 282: "XResolution", 283: "YResolution", 284: "PlanarConfiguration", 285: "PageName", 286: "XPosition", 287: "YPosition", 288: "FreeOffsets", 289: "FreeByteCounts", 290: "GrayResponseUnit", 291: "GrayResponseCurve", 292: "T4Options", 293: "T6Options", 296: "ResolutionUnit", 297: "PageNumber", 300: "ColorResponseUnit", 301: "TransferFunction", 305: "Software", 306: "ModifyDate", 315: "Artist", 316: "HostComputer", 317: "Predictor", 318: "WhitePoint", 319: "PrimaryChromaticities", 320: "ColorMap", 321: "HalftoneHints", 322: "TileWidth", 323: "TileLength", 324: "TileOffsets", 325: "TileByteCounts", 326: "BadFaxLines", 327: "CleanFaxData", 328: "ConsecutiveBadFaxLines", 330: "SubIFD", 332: "InkSet", 333: "InkNames", 334: "NumberofInks", 336: "DotRange", 337: "TargetPrinter", 338: "ExtraSamples", 339: "SampleFormat", 340: "SMinSampleValue", 341: "SMaxSampleValue", 342: "TransferRange", 343: "ClipPath", 344: "XClipPathUnits", 345: "YClipPathUnits", 346: "Indexed", 347: "JPEGTables", 351: "OPIProxy", 400: "GlobalParametersIFD", 401: "ProfileType", 402: "FaxProfile", 403: "CodingMethods", 404: "VersionYear", 405: "ModeNumber", 433: "Decode", 434: "DefaultImageColor", 435: "T82Options", 437: "JPEGTables", 512: "JPEGProc", 513: "ThumbnailOffset", 514: "ThumbnailLength", 515: "JPEGRestartInterval", 517: "JPEGLosslessPredictors", 518: "JPEGPointTransforms", 519: "JPEGQTables", 520: "JPEGDCTables", 521: "JPEGACTables", 529: "YCbCrCoefficients", 530: "YCbCrSubSampling", 531: "YCbCrPositioning", 532: "ReferenceBlackWhite", 559: "StripRowCounts", 700: "ApplicationNotes", 999: "USPTOMiscellaneous", 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight", 18246: "Rating", 18247: "XP_DIP_XML", 18248: "StitchInfo", 18249: "RatingPercent", 32781: "ImageID", 32931: "WangTag1", 32932: "WangAnnotation", 32933: "WangTag3", 32934: "WangTag4", 32995: "Matteing", 32996: "DataType", 32997: "ImageDepth", 32998: "TileDepth", 33405: "Model2", 33421: "CFARepeatPatternDim", 33422: "CFAPattern2", 33423: "BatteryLevel", 33424: "KodakIFD", 33432: "Copyright", 33434: "ExposureTime", 33437: "FNumber", 33445: "MDFileTag", 33446: "MDScalePixel", 33447: "MDColorTable", 33448: "MDLabName", 33449: "MDSampleInfo", 33450: "MDPrepDate", 33451: "MDPrepTime", 33452: "MDFileUnits", 33550: "PixelScale", 33589: "AdventScale", 33590: "AdventRevision", 33628: "UIC1Tag", 33629: "UIC2Tag", 33630: "UIC3Tag", 33631: "UIC4Tag", 33723: "IPTC-NAA", 33918: "IntergraphPacketData", 33919: "IntergraphFlagRegisters", 33920: "IntergraphMatrix", 33921: "INGRReserved", 33922: "ModelTiePoint", 34016: "Site", 34017: "ColorSequence", 34018: "IT8Header", 34019: "RasterPadding", 34020: "BitsPerRunLength", 34021: "BitsPerExtendedRunLength", 34022: "ColorTable", 34023: "ImageColorIndicator", 34024: "BackgroundColorIndicator", 34025: "ImageColorValue", 34026: "BackgroundColorValue", 34027: "PixelIntensityRange", 34028: "TransparencyIndicator", 34029: "ColorCharacterization", 34030: "HCUsage", 34031: "TrapIndicator", 34032: "CMYKEquivalent", 34118: "SEMInfo", 34152: "AFCP_IPTC", 34232: "PixelMagicJBIGOptions", 34264: "ModelTransform", 34306: "WB_GRGBLevels", 34310: "LeafData", 34377: "PhotoshopSettings", 34665: "ExifOffset", 34675: "ICC_Profile", 34687: "TIFF_FXExtensions", 34688: "MultiProfiles", 34689: "SharedData", 34690: "T88Options", 34732: "ImageLayer", 34735: "GeoTiffDirectory", 34736: "GeoTiffDoubleParams", 34737: "GeoTiffAsciiParams", 34850: "ExposureProgram", 34852: "SpectralSensitivity", 34853: "GPSInfo", 34855: "ISO", 34856: "Opto-ElectricConvFactor", 34857: "Interlace", 34858: "TimeZoneOffset", 34859: "SelfTimerMode", 34864: "SensitivityType", 34865: "StandardOutputSensitivity", 34866: "RecommendedExposureIndex", 34867: "ISOSpeed", 34868: "ISOSpeedLatitudeyyy", 34869: "ISOSpeedLatitudezzz", 34908: "FaxRecvParams", 34909: "FaxSubAddress", 34910: "FaxRecvTime", 34954: "LeafSubIFD", 36864: "ExifVersion", 36867: "DateTimeOriginal", 36868: "CreateDate", 37121: "ComponentsConfiguration", 37122: "CompressedBitsPerPixel", 37377: "ShutterSpeedValue", 37378: "ApertureValue", 37379: "BrightnessValue", 37380: "ExposureCompensation", 37381: "MaxApertureValue", 37382: "SubjectDistance", 37383: "MeteringMode", 37384: "LightSource", 37385: "Flash", 37386: "FocalLength", 37387: "FlashEnergy", 37388: "SpatialFrequencyResponse", 37389: "Noise", 37390: "FocalPlaneXResolution", 37391: "FocalPlaneYResolution", 37392: "FocalPlaneResolutionUnit", 37393: "ImageNumber", 37394: "SecurityClassification", 37395: "ImageHistory", 37396: "SubjectArea", 37397: "ExposureIndex", 37398: "TIFF-EPStandardID", 37399: "SensingMethod", 37434: "CIP3DataFile", 37435: "CIP3Sheet", 37436: "CIP3Side", 37439: "StoNits", 37500: "MakerNote", 37510: "UserComment", 37520: "SubSecTime", 37521: "SubSecTimeOriginal", 37522: "SubSecTimeDigitized", 37679: "MSDocumentText", 37680: "MSPropertySetStorage", 37681: "MSDocumentTextPosition", 37724: "ImageSourceData", 40091: "XPTitle", 40092: "XPComment", 40093: "XPAuthor", 40094: "XPKeywords", 40095: "XPSubject", 40960: "FlashpixVersion", 40961: "ColorSpace", 40962: "ExifImageWidth", 40963: "ExifImageHeight", 40964: "RelatedSoundFile", 40965: "InteropOffset", 41483: "FlashEnergy", 41484: "SpatialFrequencyResponse", 41485: "Noise", 41486: "FocalPlaneXResolution", 41487: "FocalPlaneYResolution", 41488: "FocalPlaneResolutionUnit", 41489: "ImageNumber", 41490: "SecurityClassification", 41491: "ImageHistory", 41492: "SubjectLocation", 41493: "ExposureIndex", 41494: "TIFF-EPStandardID", 41495: "SensingMethod", 41728: "FileSource", 41729: "SceneType", 41730: "CFAPattern", 41985: "CustomRendered", 41986: "ExposureMode", 41987: "WhiteBalance", 41988: "DigitalZoomRatio", 41989: "FocalLengthIn35mmFormat", 41990: "SceneCaptureType", 41991: "GainControl", 41992: "Contrast", 41993: "Saturation", 41994: "Sharpness", 41995: "DeviceSettingDescription", 41996: "SubjectDistanceRange", 42016: "ImageUniqueID", 42032: "OwnerName", 42033: "SerialNumber", 42034: "LensInfo", 42035: "LensMake", 42036: "LensModel", 42037: "LensSerialNumber", 42112: "GDALMetadata", 42113: "GDALNoData", 42240: "Gamma", 44992: "ExpandSoftware", 44993: "ExpandLens", 44994: "ExpandFilm", 44995: "ExpandFilterLens", 44996: "ExpandScanner", 44997: "ExpandFlashLamp", 48129: "PixelFormat", 48130: "Transformation", 48131: "Uncompressed", 48132: "ImageType", 48256: "ImageWidth", 48257: "ImageHeight", 48258: "WidthResolution", 48259: "HeightResolution", 48320: "ImageOffset", 48321: "ImageByteCount", 48322: "AlphaOffset", 48323: "AlphaByteCount", 48324: "ImageDataDiscard", 48325: "AlphaDataDiscard", 50215: "OceScanjobDesc", 50216: "OceApplicationSelector", 50217: "OceIDNumber", 50218: "OceImageLogic", 50255: "Annotations", 50341: "PrintIM", 50560: "USPTOOriginalContentType", 50706: "DNGVersion", 50707: "DNGBackwardVersion", 50708: "UniqueCameraModel", 50709: "LocalizedCameraModel", 50710: "CFAPlaneColor", 50711: "CFALayout", 50712: "LinearizationTable", 50713: "BlackLevelRepeatDim", 50714: "BlackLevel", 50715: "BlackLevelDeltaH", 50716: "BlackLevelDeltaV", 50717: "WhiteLevel", 50718: "DefaultScale", 50719: "DefaultCropOrigin", 50720: "DefaultCropSize", 50721: "ColorMatrix1", 50722: "ColorMatrix2", 50723: "CameraCalibration1", 50724: "CameraCalibration2", 50725: "ReductionMatrix1", 50726: "ReductionMatrix2", 50727: "AnalogBalance", 50728: "AsShotNeutral", 50729: "AsShotWhiteXY", 50730: "BaselineExposure", 50731: "BaselineNoise", 50732: "BaselineSharpness", 50733: "BayerGreenSplit", 50734: "LinearResponseLimit", 50735: "CameraSerialNumber", 50736: "DNGLensInfo", 50737: "ChromaBlurRadius", 50738: "AntiAliasStrength", 50739: "ShadowScale", 50740: "DNGPrivateData", 50741: "MakerNoteSafety", 50752: "RawImageSegmentation", 50778: "CalibrationIlluminant1", 50779: "CalibrationIlluminant2", 50780: "BestQualityScale", 50781: "RawDataUniqueID", 50784: "AliasLayerMetadata", 50827: "OriginalRawFileName", 50828: "OriginalRawFileData", 50829: "ActiveArea", 50830: "MaskedAreas", 50831: "AsShotICCProfile", 50832: "AsShotPreProfileMatrix", 50833: "CurrentICCProfile", 50834: "CurrentPreProfileMatrix", 50879: "ColorimetricReference", 50898: "PanasonicTitle", 50899: "PanasonicTitle2", 50931: "CameraCalibrationSig", 50932: "ProfileCalibrationSig", 50933: "ProfileIFD", 50934: "AsShotProfileName", 50935: "NoiseReductionApplied", 50936: "ProfileName", 50937: "ProfileHueSatMapDims", 50938: "ProfileHueSatMapData1", 50939: "ProfileHueSatMapData2", 50940: "ProfileToneCurve", 50941: "ProfileEmbedPolicy", 50942: "ProfileCopyright", 50964: "ForwardMatrix1", 50965: "ForwardMatrix2", 50966: "PreviewApplicationName", 50967: "PreviewApplicationVersion", 50968: "PreviewSettingsName", 50969: "PreviewSettingsDigest", 50970: "PreviewColorSpace", 50971: "PreviewDateTime", 50972: "RawImageDigest", 50973: "OriginalRawFileDigest", 50974: "SubTileBlockSize", 50975: "RowInterleaveFactor", 50981: "ProfileLookTableDims", 50982: "ProfileLookTableData", 51008: "OpcodeList1", 51009: "OpcodeList2", 51022: "OpcodeList3", 51041: "NoiseProfile", 51043: "TimeCodes", 51044: "FrameRate", 51058: "TStop", 51081: "ReelName", 51089: "OriginalDefaultFinalSize", 51090: "OriginalBestQualitySize", 51091: "OriginalDefaultCropSize", 51105: "CameraLabel", 51107: "ProfileHueSatMapEncoding", 51108: "ProfileLookTableEncoding", 51109: "BaselineExposureOffset", 51110: "DefaultBlackRender", 51111: "NewRawImageDigest", 51112: "RawToPreviewGain", 51125: "DefaultUserCrop", 59932: "Padding", 59933: "OffsetSchema", 65e3: "OwnerName", 65001: "SerialNumber", 65002: "Lens", 65024: "KDC_IFD", 65100: "RawFile", 65101: "Converter", 65102: "WhiteBalance", 65105: "Exposure", 65106: "Shadows", 65107: "Brightness", 65108: "Contrast", 65109: "Saturation", 65110: "Sharpness", 65111: "Smoothness", 65112: "MoireFilter" }, gps: { 0: "GPSVersionID", 1: "GPSLatitudeRef", 2: "GPSLatitude", 3: "GPSLongitudeRef", 4: "GPSLongitude", 5: "GPSAltitudeRef", 6: "GPSAltitude", 7: "GPSTimeStamp", 8: "GPSSatellites", 9: "GPSStatus", 10: "GPSMeasureMode", 11: "GPSDOP", 12: "GPSSpeedRef", 13: "GPSSpeed", 14: "GPSTrackRef", 15: "GPSTrack", 16: "GPSImgDirectionRef", 17: "GPSImgDirection", 18: "GPSMapDatum", 19: "GPSDestLatitudeRef", 20: "GPSDestLatitude", 21: "GPSDestLongitudeRef", 22: "GPSDestLongitude", 23: "GPSDestBearingRef", 24: "GPSDestBearing", 25: "GPSDestDistanceRef", 26: "GPSDestDistance", 27: "GPSProcessingMethod", 28: "GPSAreaInformation", 29: "GPSDateStamp", 30: "GPSDifferential", 31: "GPSHPositioningError" } };
}, 8087: (e) => {
  e.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
}, 14321: (e) => {
  function t(e2, t2, i, a) {
    this.buffer = e2, this.offset = t2 || 0, i = "number" == typeof i ? i : e2.length, this.endPosition = this.offset + i, this.setBigEndian(a);
  }
  t.prototype = { setBigEndian: function(e2) {
    this.bigEndian = !!e2;
  }, nextUInt8: function() {
    var e2 = this.buffer.readUInt8(this.offset);
    return this.offset += 1, e2;
  }, nextInt8: function() {
    var e2 = this.buffer.readInt8(this.offset);
    return this.offset += 1, e2;
  }, nextUInt16: function() {
    var e2 = this.bigEndian ? this.buffer.readUInt16BE(this.offset) : this.buffer.readUInt16LE(this.offset);
    return this.offset += 2, e2;
  }, nextUInt32: function() {
    var e2 = this.bigEndian ? this.buffer.readUInt32BE(this.offset) : this.buffer.readUInt32LE(this.offset);
    return this.offset += 4, e2;
  }, nextInt16: function() {
    var e2 = this.bigEndian ? this.buffer.readInt16BE(this.offset) : this.buffer.readInt16LE(this.offset);
    return this.offset += 2, e2;
  }, nextInt32: function() {
    var e2 = this.bigEndian ? this.buffer.readInt32BE(this.offset) : this.buffer.readInt32LE(this.offset);
    return this.offset += 4, e2;
  }, nextFloat: function() {
    var e2 = this.bigEndian ? this.buffer.readFloatBE(this.offset) : this.buffer.readFloatLE(this.offset);
    return this.offset += 4, e2;
  }, nextDouble: function() {
    var e2 = this.bigEndian ? this.buffer.readDoubleBE(this.offset) : this.buffer.readDoubleLE(this.offset);
    return this.offset += 8, e2;
  }, nextBuffer: function(e2) {
    var t2 = this.buffer.slice(this.offset, this.offset + e2);
    return this.offset += e2, t2;
  }, remainingLength: function() {
    return this.endPosition - this.offset;
  }, nextString: function(e2) {
    var t2 = this.buffer.toString("utf8", this.offset, this.offset + e2);
    return this.offset += e2, t2;
  }, mark: function() {
    var e2 = this;
    return { openWithOffset: function(i) {
      return i = (i || 0) + this.offset, new t(e2.buffer, i, e2.endPosition - i, e2.bigEndian);
    }, offset: this.offset };
  }, offsetFrom: function(e2) {
    return this.offset - e2.offset;
  }, skip: function(e2) {
    this.offset += e2;
  }, branch: function(e2, i) {
    return i = "number" == typeof i ? i : this.endPosition - (this.offset + e2), new t(this.buffer, this.offset + e2, i, this.bigEndian);
  } }, e.exports = t;
}, 14333: (e) => {
  function t(e2, t2) {
    switch (e2) {
      case 1:
        return t2.nextUInt8();
      case 3:
      case 8:
        return t2.nextUInt16();
      case 4:
      case 9:
        return t2.nextUInt32();
      case 5:
        return [t2.nextUInt32(), t2.nextUInt32()];
      case 6:
        return t2.nextInt8();
      case 10:
        return [t2.nextInt32(), t2.nextInt32()];
      case 11:
        return t2.nextFloat();
      case 12:
        return t2.nextDouble();
      default:
        throw new Error("Invalid format while decoding: " + e2);
    }
  }
  function i(e2, i2) {
    var a2, n, r = i2.nextUInt16(), o = i2.nextUInt16(), s = (function(e3) {
      switch (e3) {
        case 1:
        case 2:
        case 6:
        case 7:
          return 1;
        case 3:
        case 8:
          return 2;
        case 4:
        case 9:
        case 11:
          return 4;
        case 5:
        case 10:
        case 12:
          return 8;
        default:
          return 0;
      }
    })(o), f = i2.nextUInt32(), p = s * f;
    if (p > 4 && (i2 = e2.openWithOffset(i2.nextUInt32())), 2 === o) {
      var m = (a2 = i2.nextString(f)).indexOf("\0");
      -1 !== m && (a2 = a2.substr(0, m));
    } else if (7 === o) a2 = i2.nextBuffer(f);
    else if (0 !== o) for (a2 = [], n = 0; n < f; ++n) a2.push(t(o, i2));
    return p < 4 && i2.skip(4 - p), [r, a2, o];
  }
  function a(e2, t2, a2) {
    var n, r, o = t2.nextUInt16();
    for (r = 0; r < o; ++r) a2((n = i(e2, t2))[0], n[1], n[2]);
  }
  e.exports = { IFD0: 1, IFD1: 2, GPSIFD: 3, SubIFD: 4, InteropIFD: 5, parseTags: function(e2, t2) {
    var i2, n, r, o;
    try {
      i2 = (function(e3) {
        if ("Exif\0\0" !== e3.nextString(6)) throw new Error("Invalid EXIF header");
        var t3 = e3.mark(), i3 = e3.nextUInt16();
        if (18761 === i3) e3.setBigEndian(false);
        else {
          if (19789 !== i3) throw new Error("Invalid TIFF header");
          e3.setBigEndian(true);
        }
        if (42 !== e3.nextUInt16()) throw new Error("Invalid TIFF data");
        return t3;
      })(e2);
    } catch (e3) {
      return false;
    }
    var s = i2.openWithOffset(e2.nextUInt32()), f = this.IFD0;
    a(i2, s, function(e3, i3, a2) {
      switch (e3) {
        case 34853:
          r = i3[0];
          break;
        case 34665:
          n = i3[0];
          break;
        default:
          t2(f, e3, i3, a2);
      }
    });
    var p = s.nextUInt32();
    if (0 !== p) {
      var m = i2.openWithOffset(p);
      a(i2, m, t2.bind(null, this.IFD1));
    }
    if (r) {
      var l = i2.openWithOffset(r);
      a(i2, l, t2.bind(null, this.GPSIFD));
    }
    if (n) {
      var c = i2.openWithOffset(n), u = this.InteropIFD;
      a(i2, c, function(e3, i3, a2) {
        40965 === e3 ? o = i3[0] : t2(u, e3, i3, a2);
      });
    }
    if (o) {
      var d = i2.openWithOffset(o);
      a(i2, d, t2.bind(null, this.InteropIFD));
    }
    return true;
  } };
}, 15983: (e, t, i) => {
  var a = i(90512);
  e.exports = { create: function(e2, t2) {
    if (e2 instanceof (t2 = t2 || (0, eval)("this")).ArrayBuffer) {
      var n = i(92774);
      return new a(new n(e2, 0, e2.byteLength, true, t2));
    }
    var r = i(14321);
    return new a(new r(e2, 0, e2.length, true));
  } };
}, 22457: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.BufferTokenizer = void 0;
  const a = i(690), n = i(72665);
  class r extends n.AbstractTokenizer {
    constructor(e2, t2) {
      super(t2), this.uint8Array = e2, this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : e2.length;
    }
    async readBuffer(e2, t2) {
      if (t2 && t2.position) {
        if (t2.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        this.position = t2.position;
      }
      const i2 = await this.peekBuffer(e2, t2);
      return this.position += i2, i2;
    }
    async peekBuffer(e2, t2) {
      const i2 = this.normalizeOptions(e2, t2), n2 = Math.min(this.uint8Array.length - i2.position, i2.length);
      if (!i2.mayBeLess && n2 < i2.length) throw new a.EndOfStreamError();
      return e2.set(this.uint8Array.subarray(i2.position, i2.position + n2), i2.offset), n2;
    }
    async close() {
    }
  }
  t.BufferTokenizer = r;
}, 28467: (e, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.Deferred = void 0;
  t.Deferred = class {
    constructor() {
      this.resolve = () => null, this.reject = () => null, this.promise = new Promise((e2, t2) => {
        this.reject = t2, this.resolve = e2;
      });
    }
  };
}, 28742: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.AnsiStringType = t.StringType = t.BufferType = t.Uint8ArrayType = t.IgnoreType = t.Float80_LE = t.Float80_BE = t.Float64_LE = t.Float64_BE = t.Float32_LE = t.Float32_BE = t.Float16_LE = t.Float16_BE = t.INT64_BE = t.UINT64_BE = t.INT64_LE = t.UINT64_LE = t.INT32_LE = t.INT32_BE = t.INT24_BE = t.INT24_LE = t.INT16_LE = t.INT16_BE = t.INT8 = t.UINT32_BE = t.UINT32_LE = t.UINT24_BE = t.UINT24_LE = t.UINT16_BE = t.UINT16_LE = t.UINT8 = void 0;
  const a = i(48821);
  function n(e2) {
    return new DataView(e2.buffer, e2.byteOffset);
  }
  t.UINT8 = { len: 1, get: (e2, t2) => n(e2).getUint8(t2), put: (e2, t2, i2) => (n(e2).setUint8(t2, i2), t2 + 1) }, t.UINT16_LE = { len: 2, get: (e2, t2) => n(e2).getUint16(t2, true), put: (e2, t2, i2) => (n(e2).setUint16(t2, i2, true), t2 + 2) }, t.UINT16_BE = { len: 2, get: (e2, t2) => n(e2).getUint16(t2), put: (e2, t2, i2) => (n(e2).setUint16(t2, i2), t2 + 2) }, t.UINT24_LE = { len: 3, get(e2, t2) {
    const i2 = n(e2);
    return i2.getUint8(t2) + (i2.getUint16(t2 + 1, true) << 8);
  }, put(e2, t2, i2) {
    const a2 = n(e2);
    return a2.setUint8(t2, 255 & i2), a2.setUint16(t2 + 1, i2 >> 8, true), t2 + 3;
  } }, t.UINT24_BE = { len: 3, get(e2, t2) {
    const i2 = n(e2);
    return (i2.getUint16(t2) << 8) + i2.getUint8(t2 + 2);
  }, put(e2, t2, i2) {
    const a2 = n(e2);
    return a2.setUint16(t2, i2 >> 8), a2.setUint8(t2 + 2, 255 & i2), t2 + 3;
  } }, t.UINT32_LE = { len: 4, get: (e2, t2) => n(e2).getUint32(t2, true), put: (e2, t2, i2) => (n(e2).setUint32(t2, i2, true), t2 + 4) }, t.UINT32_BE = { len: 4, get: (e2, t2) => n(e2).getUint32(t2), put: (e2, t2, i2) => (n(e2).setUint32(t2, i2), t2 + 4) }, t.INT8 = { len: 1, get: (e2, t2) => n(e2).getInt8(t2), put: (e2, t2, i2) => (n(e2).setInt8(t2, i2), t2 + 1) }, t.INT16_BE = { len: 2, get: (e2, t2) => n(e2).getInt16(t2), put: (e2, t2, i2) => (n(e2).setInt16(t2, i2), t2 + 2) }, t.INT16_LE = { len: 2, get: (e2, t2) => n(e2).getInt16(t2, true), put: (e2, t2, i2) => (n(e2).setInt16(t2, i2, true), t2 + 2) }, t.INT24_LE = { len: 3, get(e2, i2) {
    const a2 = t.UINT24_LE.get(e2, i2);
    return a2 > 8388607 ? a2 - 16777216 : a2;
  }, put(e2, t2, i2) {
    const a2 = n(e2);
    return a2.setUint8(t2, 255 & i2), a2.setUint16(t2 + 1, i2 >> 8, true), t2 + 3;
  } }, t.INT24_BE = { len: 3, get(e2, i2) {
    const a2 = t.UINT24_BE.get(e2, i2);
    return a2 > 8388607 ? a2 - 16777216 : a2;
  }, put(e2, t2, i2) {
    const a2 = n(e2);
    return a2.setUint16(t2, i2 >> 8), a2.setUint8(t2 + 2, 255 & i2), t2 + 3;
  } }, t.INT32_BE = { len: 4, get: (e2, t2) => n(e2).getInt32(t2), put: (e2, t2, i2) => (n(e2).setInt32(t2, i2), t2 + 4) }, t.INT32_LE = { len: 4, get: (e2, t2) => n(e2).getInt32(t2, true), put: (e2, t2, i2) => (n(e2).setInt32(t2, i2, true), t2 + 4) }, t.UINT64_LE = { len: 8, get: (e2, t2) => n(e2).getBigUint64(t2, true), put: (e2, t2, i2) => (n(e2).setBigUint64(t2, i2, true), t2 + 8) }, t.INT64_LE = { len: 8, get: (e2, t2) => n(e2).getBigInt64(t2, true), put: (e2, t2, i2) => (n(e2).setBigInt64(t2, i2, true), t2 + 8) }, t.UINT64_BE = { len: 8, get: (e2, t2) => n(e2).getBigUint64(t2), put: (e2, t2, i2) => (n(e2).setBigUint64(t2, i2), t2 + 8) }, t.INT64_BE = { len: 8, get: (e2, t2) => n(e2).getBigInt64(t2), put: (e2, t2, i2) => (n(e2).setBigInt64(t2, i2), t2 + 8) }, t.Float16_BE = { len: 2, get(e2, t2) {
    return a.read(e2, t2, false, 10, this.len);
  }, put(e2, t2, i2) {
    return a.write(e2, i2, t2, false, 10, this.len), t2 + this.len;
  } }, t.Float16_LE = { len: 2, get(e2, t2) {
    return a.read(e2, t2, true, 10, this.len);
  }, put(e2, t2, i2) {
    return a.write(e2, i2, t2, true, 10, this.len), t2 + this.len;
  } }, t.Float32_BE = { len: 4, get: (e2, t2) => n(e2).getFloat32(t2), put: (e2, t2, i2) => (n(e2).setFloat32(t2, i2), t2 + 4) }, t.Float32_LE = { len: 4, get: (e2, t2) => n(e2).getFloat32(t2, true), put: (e2, t2, i2) => (n(e2).setFloat32(t2, i2, true), t2 + 4) }, t.Float64_BE = { len: 8, get: (e2, t2) => n(e2).getFloat64(t2), put: (e2, t2, i2) => (n(e2).setFloat64(t2, i2), t2 + 8) }, t.Float64_LE = { len: 8, get: (e2, t2) => n(e2).getFloat64(t2, true), put: (e2, t2, i2) => (n(e2).setFloat64(t2, i2, true), t2 + 8) }, t.Float80_BE = { len: 10, get(e2, t2) {
    return a.read(e2, t2, false, 63, this.len);
  }, put(e2, t2, i2) {
    return a.write(e2, i2, t2, false, 63, this.len), t2 + this.len;
  } }, t.Float80_LE = { len: 10, get(e2, t2) {
    return a.read(e2, t2, true, 63, this.len);
  }, put(e2, t2, i2) {
    return a.write(e2, i2, t2, true, 63, this.len), t2 + this.len;
  } };
  t.IgnoreType = class {
    constructor(e2) {
      this.len = e2;
    }
    get(e2, t2) {
    }
  };
  t.Uint8ArrayType = class {
    constructor(e2) {
      this.len = e2;
    }
    get(e2, t2) {
      return e2.subarray(t2, t2 + this.len);
    }
  };
  t.BufferType = class {
    constructor(e2) {
      this.len = e2;
    }
    get(e2, t2) {
      return Buffer.from(e2.subarray(t2, t2 + this.len));
    }
  };
  t.StringType = class {
    constructor(e2, t2) {
      this.len = e2, this.encoding = t2;
    }
    get(e2, t2) {
      return Buffer.from(e2).toString(this.encoding, t2, t2 + this.len);
    }
  };
  class r {
    constructor(e2) {
      this.len = e2;
    }
    static decode(e2, t2, i2) {
      let a2 = "";
      for (let n2 = t2; n2 < i2; ++n2) a2 += r.codePointToString(r.singleByteDecoder(e2[n2]));
      return a2;
    }
    static inRange(e2, t2, i2) {
      return t2 <= e2 && e2 <= i2;
    }
    static codePointToString(e2) {
      return e2 <= 65535 ? String.fromCharCode(e2) : (e2 -= 65536, String.fromCharCode(55296 + (e2 >> 10), 56320 + (1023 & e2)));
    }
    static singleByteDecoder(e2) {
      if (r.inRange(e2, 0, 127)) return e2;
      const t2 = r.windows1252[e2 - 128];
      if (null === t2) throw Error("invaliding encoding");
      return t2;
    }
    get(e2, t2 = 0) {
      return r.decode(e2, t2, t2 + this.len);
    }
  }
  t.AnsiStringType = r, r.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255];
}, 34939: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.StreamReader = t.EndOfStreamError = void 0;
  const a = i(91524), n = i(28467);
  var r = i(91524);
  Object.defineProperty(t, "EndOfStreamError", { enumerable: true, get: function() {
    return r.EndOfStreamError;
  } });
  t.StreamReader = class {
    constructor(e2) {
      if (this.s = e2, this.deferred = null, this.endOfStream = false, this.peekQueue = [], !e2.read || !e2.once) throw new Error("Expected an instance of stream.Readable");
      this.s.once("end", () => this.reject(new a.EndOfStreamError())), this.s.once("error", (e3) => this.reject(e3)), this.s.once("close", () => this.reject(new Error("Stream closed")));
    }
    async peek(e2, t2, i2) {
      const a2 = await this.read(e2, t2, i2);
      return this.peekQueue.push(e2.subarray(t2, t2 + a2)), a2;
    }
    async read(e2, t2, i2) {
      if (0 === i2) return 0;
      if (0 === this.peekQueue.length && this.endOfStream) throw new a.EndOfStreamError();
      let n2 = i2, r2 = 0;
      for (; this.peekQueue.length > 0 && n2 > 0; ) {
        const i3 = this.peekQueue.pop();
        if (!i3) throw new Error("peekData should be defined");
        const a2 = Math.min(i3.length, n2);
        e2.set(i3.subarray(0, a2), t2 + r2), r2 += a2, n2 -= a2, a2 < i3.length && this.peekQueue.push(i3.subarray(a2));
      }
      for (; n2 > 0 && !this.endOfStream; ) {
        const i3 = Math.min(n2, 1048576), a2 = await this.readFromStream(e2, t2 + r2, i3);
        if (r2 += a2, a2 < i3) break;
        n2 -= a2;
      }
      return r2;
    }
    async readFromStream(e2, t2, i2) {
      const a2 = this.s.read(i2);
      if (a2) return e2.set(a2, t2), a2.length;
      {
        const a3 = { buffer: e2, offset: t2, length: i2, deferred: new n.Deferred() };
        return this.deferred = a3.deferred, this.s.once("readable", () => {
          this.readDeferred(a3);
        }), a3.deferred.promise;
      }
    }
    readDeferred(e2) {
      const t2 = this.s.read(e2.length);
      t2 ? (e2.buffer.set(t2, e2.offset), e2.deferred.resolve(t2.length), this.deferred = null) : this.s.once("readable", () => {
        this.readDeferred(e2);
      });
    }
    reject(e2) {
      this.endOfStream = true, this.deferred && (this.deferred.reject(e2), this.deferred = null);
    }
  };
}, 48821: (e, t) => {
  t.read = function(e2, t2, i, a, n) {
    var r, o, s = 8 * n - a - 1, f = (1 << s) - 1, p = f >> 1, m = -7, l = i ? n - 1 : 0, c = i ? -1 : 1, u = e2[t2 + l];
    for (l += c, r = u & (1 << -m) - 1, u >>= -m, m += s; m > 0; r = 256 * r + e2[t2 + l], l += c, m -= 8) ;
    for (o = r & (1 << -m) - 1, r >>= -m, m += a; m > 0; o = 256 * o + e2[t2 + l], l += c, m -= 8) ;
    if (0 === r) r = 1 - p;
    else {
      if (r === f) return o ? NaN : 1 / 0 * (u ? -1 : 1);
      o += Math.pow(2, a), r -= p;
    }
    return (u ? -1 : 1) * o * Math.pow(2, r - a);
  }, t.write = function(e2, t2, i, a, n, r) {
    var o, s, f, p = 8 * r - n - 1, m = (1 << p) - 1, l = m >> 1, c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u = a ? 0 : r - 1, d = a ? 1 : -1, h = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
    for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (s = isNaN(t2) ? 1 : 0, o = m) : (o = Math.floor(Math.log(t2) / Math.LN2), t2 * (f = Math.pow(2, -o)) < 1 && (o--, f *= 2), (t2 += o + l >= 1 ? c / f : c * Math.pow(2, 1 - l)) * f >= 2 && (o++, f /= 2), o + l >= m ? (s = 0, o = m) : o + l >= 1 ? (s = (t2 * f - 1) * Math.pow(2, n), o += l) : (s = t2 * Math.pow(2, l - 1) * Math.pow(2, n), o = 0)); n >= 8; e2[i + u] = 255 & s, u += d, s /= 256, n -= 8) ;
    for (o = o << n | s, p += n; p > 0; e2[i + u] = 255 & o, u += d, o /= 256, p -= 8) ;
    e2[i + u - d] |= 128 * h;
  };
}, 49968: (e) => {
  "use strict";
  function t() {
    this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
    for (let e2 = 0; e2 < arguments.length; e2++) this.define(arguments[e2]);
    this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
  }
  t.prototype.define = function(e2, t2) {
    for (let i in e2) {
      let a = e2[i].map(function(e3) {
        return e3.toLowerCase();
      });
      i = i.toLowerCase();
      for (let e3 = 0; e3 < a.length; e3++) {
        const n = a[e3];
        if ("*" !== n[0]) {
          if (!t2 && n in this._types) throw new Error('Attempt to change mapping for "' + n + '" extension from "' + this._types[n] + '" to "' + i + '". Pass `force=true` to allow this, otherwise remove "' + n + '" from the list of extensions for "' + i + '".');
          this._types[n] = i;
        }
      }
      if (t2 || !this._extensions[i]) {
        const e3 = a[0];
        this._extensions[i] = "*" !== e3[0] ? e3 : e3.substr(1);
      }
    }
  }, t.prototype.getType = function(e2) {
    let t2 = (e2 = String(e2)).replace(/^.*[/\\]/, "").toLowerCase(), i = t2.replace(/^.*\./, "").toLowerCase(), a = t2.length < e2.length;
    return (i.length < t2.length - 1 || !a) && this._types[i] || null;
  }, t.prototype.getExtension = function(e2) {
    return (e2 = /^\s*([^;\s]*)/.test(e2) && RegExp.$1) && this._extensions[e2.toLowerCase()] || null;
  }, e.exports = t;
}, 51060: (e, t, i) => {
  "use strict";
  let a = i(49968);
  e.exports = new a(i(8087));
}, 52421: (e) => {
  e.exports = { parseSections: function(e2, t) {
    var i, a;
    for (e2.setBigEndian(true); e2.remainingLength() > 0 && 218 !== a; ) {
      if (255 !== e2.nextUInt8()) throw new Error("Invalid JPEG section offset");
      i = (a = e2.nextUInt8()) >= 208 && a <= 217 || 218 === a ? 0 : e2.nextUInt16() - 2, t(a, e2.branch(0, i)), e2.skip(i);
    }
  }, getSizeFromSOFSection: function(e2) {
    return e2.skip(1), { height: e2.nextUInt16(), width: e2.nextUInt16() };
  }, getSectionName: function(e2) {
    var t, i;
    switch (e2) {
      case 216:
        t = "SOI";
        break;
      case 196:
        t = "DHT";
        break;
      case 219:
        t = "DQT";
        break;
      case 221:
        t = "DRI";
        break;
      case 218:
        t = "SOS";
        break;
      case 254:
        t = "COM";
        break;
      case 217:
        t = "EOI";
        break;
      default:
        e2 >= 224 && e2 <= 239 ? (t = "APP", i = e2 - 224) : e2 >= 192 && e2 <= 207 && 196 !== e2 && 200 !== e2 && 204 !== e2 ? (t = "SOF", i = e2 - 192) : e2 >= 208 && e2 <= 215 && (t = "RST", i = e2 - 208);
    }
    var a = { name: t };
    return "number" == typeof i && (a.index = i), a;
  } };
}, 58563: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.ReadStreamTokenizer = void 0;
  const a = i(72665), n = i(690);
  class r extends a.AbstractTokenizer {
    constructor(e2, t2) {
      super(t2), this.streamReader = new n.StreamReader(e2);
    }
    async getFileInfo() {
      return this.fileInfo;
    }
    async readBuffer(e2, t2) {
      const i2 = this.normalizeOptions(e2, t2), a2 = i2.position - this.position;
      if (a2 > 0) return await this.ignore(a2), this.readBuffer(e2, t2);
      if (a2 < 0) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      if (0 === i2.length) return 0;
      const r2 = await this.streamReader.read(e2, i2.offset, i2.length);
      if (this.position += r2, (!t2 || !t2.mayBeLess) && r2 < i2.length) throw new n.EndOfStreamError();
      return r2;
    }
    async peekBuffer(e2, t2) {
      const i2 = this.normalizeOptions(e2, t2);
      let a2 = 0;
      if (i2.position) {
        const t3 = i2.position - this.position;
        if (t3 > 0) {
          const n2 = new Uint8Array(i2.length + t3);
          return a2 = await this.peekBuffer(n2, { mayBeLess: i2.mayBeLess }), e2.set(n2.subarray(t3), i2.offset), a2 - t3;
        }
        if (t3 < 0) throw new Error("Cannot peek from a negative offset in a stream");
      }
      if (i2.length > 0) {
        try {
          a2 = await this.streamReader.peek(e2, i2.offset, i2.length);
        } catch (e3) {
          if (t2 && t2.mayBeLess && e3 instanceof n.EndOfStreamError) return 0;
          throw e3;
        }
        if (!i2.mayBeLess && a2 < i2.length) throw new n.EndOfStreamError();
      }
      return a2;
    }
    async ignore(e2) {
      const t2 = Math.min(256e3, e2), i2 = new Uint8Array(t2);
      let a2 = 0;
      for (; a2 < e2; ) {
        const n2 = e2 - a2, r2 = await this.readBuffer(i2, { length: Math.min(t2, n2) });
        if (r2 < 0) return r2;
        a2 += r2;
      }
      return a2;
    }
  }
  t.ReadStreamTokenizer = r;
}, 64651: (e) => {
  "use strict";
  e.exports = { extensions: ["jpg", "png", "apng", "gif", "webp", "flif", "xcf", "cr2", "cr3", "orf", "arw", "dng", "nef", "rw2", "raf", "tif", "bmp", "icns", "jxr", "psd", "indd", "zip", "tar", "rar", "gz", "bz2", "7z", "dmg", "mp4", "mid", "mkv", "webm", "mov", "avi", "mpg", "mp2", "mp3", "m4a", "oga", "ogg", "ogv", "opus", "flac", "wav", "spx", "amr", "pdf", "epub", "exe", "swf", "rtf", "wasm", "woff", "woff2", "eot", "ttf", "otf", "ico", "flv", "ps", "xz", "sqlite", "nes", "crx", "xpi", "cab", "deb", "ar", "rpm", "Z", "lz", "cfb", "mxf", "mts", "blend", "bpg", "docx", "pptx", "xlsx", "3gp", "3g2", "jp2", "jpm", "jpx", "mj2", "aif", "qcp", "odt", "ods", "odp", "xml", "mobi", "heic", "cur", "ktx", "ape", "wv", "dcm", "ics", "glb", "pcap", "dsf", "lnk", "alias", "voc", "ac3", "m4v", "m4p", "m4b", "f4v", "f4p", "f4b", "f4a", "mie", "asf", "ogm", "ogx", "mpc", "arrow", "shp", "aac", "mp1", "it", "s3m", "xm", "ai", "skp", "avif", "eps", "lzh", "pgp", "asar", "stl", "chm", "3mf", "zst", "jxl", "vcf"], mimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/flif", "image/x-xcf", "image/x-canon-cr2", "image/x-canon-cr3", "image/tiff", "image/bmp", "image/vnd.ms-photo", "image/vnd.adobe.photoshop", "application/x-indesign", "application/epub+zip", "application/x-xpinstall", "application/vnd.oasis.opendocument.text", "application/vnd.oasis.opendocument.spreadsheet", "application/vnd.oasis.opendocument.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/zip", "application/x-tar", "application/x-rar-compressed", "application/gzip", "application/x-bzip2", "application/x-7z-compressed", "application/x-apple-diskimage", "application/x-apache-arrow", "video/mp4", "audio/midi", "video/x-matroska", "video/webm", "video/quicktime", "video/vnd.avi", "audio/vnd.wave", "audio/qcelp", "audio/x-ms-asf", "video/x-ms-asf", "application/vnd.ms-asf", "video/mpeg", "video/3gpp", "audio/mpeg", "audio/mp4", "audio/opus", "video/ogg", "audio/ogg", "application/ogg", "audio/x-flac", "audio/ape", "audio/wavpack", "audio/amr", "application/pdf", "application/x-msdownload", "application/x-shockwave-flash", "application/rtf", "application/wasm", "font/woff", "font/woff2", "application/vnd.ms-fontobject", "font/ttf", "font/otf", "image/x-icon", "video/x-flv", "application/postscript", "application/eps", "application/x-xz", "application/x-sqlite3", "application/x-nintendo-nes-rom", "application/x-google-chrome-extension", "application/vnd.ms-cab-compressed", "application/x-deb", "application/x-unix-archive", "application/x-rpm", "application/x-compress", "application/x-lzip", "application/x-cfb", "application/x-mie", "application/mxf", "video/mp2t", "application/x-blender", "image/bpg", "image/jp2", "image/jpx", "image/jpm", "image/mj2", "audio/aiff", "application/xml", "application/x-mobipocket-ebook", "image/heif", "image/heif-sequence", "image/heic", "image/heic-sequence", "image/icns", "image/ktx", "application/dicom", "audio/x-musepack", "text/calendar", "text/vcard", "model/gltf-binary", "application/vnd.tcpdump.pcap", "audio/x-dsf", "application/x.ms.shortcut", "application/x.apple.alias", "audio/x-voc", "audio/vnd.dolby.dd-raw", "audio/x-m4a", "image/apng", "image/x-olympus-orf", "image/x-sony-arw", "image/x-adobe-dng", "image/x-nikon-nef", "image/x-panasonic-rw2", "image/x-fujifilm-raf", "video/x-m4v", "video/3gpp2", "application/x-esri-shape", "audio/aac", "audio/x-it", "audio/x-s3m", "audio/x-xm", "video/MP1S", "video/MP2P", "application/vnd.sketchup.skp", "image/avif", "application/x-lzh-compressed", "application/pgp-encrypted", "application/x-asar", "model/stl", "application/vnd.ms-htmlhelp", "model/3mf", "image/jxl", "application/zstd"] };
}, 67676: (e, t, i) => {
  var a = i(14333), n = i(68231), r = [{ section: a.GPSIFD, type: 2, name: "GPSLatitude", refType: 1, refName: "GPSLatitudeRef", posVal: "N" }, { section: a.GPSIFD, type: 4, name: "GPSLongitude", refType: 3, refName: "GPSLongitudeRef", posVal: "E" }], o = [{ section: a.SubIFD, type: 306, name: "ModifyDate" }, { section: a.SubIFD, type: 36867, name: "DateTimeOriginal" }, { section: a.SubIFD, type: 36868, name: "CreateDate" }, { section: a.SubIFD, type: 306, name: "ModifyDate" }];
  e.exports = { castDegreeValues: function(e2, t2) {
    r.forEach(function(i2) {
      var a2 = e2(i2);
      if (a2) {
        var n2 = e2({ section: i2.section, type: i2.refType, name: i2.refName }) === i2.posVal ? 1 : -1, r2 = (a2[0] + a2[1] / 60 + a2[2] / 3600) * n2;
        t2(i2, r2);
      }
    });
  }, castDateValues: function(e2, t2) {
    o.forEach(function(i2) {
      var a2 = e2(i2);
      if (a2) {
        var r2 = n.parseExifDate(a2);
        void 0 !== r2 && t2(i2, r2);
      }
    });
  }, simplifyValue: function(e2, t2) {
    return Array.isArray(e2) && 1 === (e2 = e2.map(function(e3) {
      return 10 === t2 || 5 === t2 ? e3[0] / e3[1] : e3;
    })).length && (e2 = e2[0]), e2;
  } };
}, 68231: (e) => {
  function t(e2) {
    return parseInt(e2, 10);
  }
  function i(e2, i2) {
    e2 = e2.map(t), i2 = i2.map(t);
    var a2 = e2[0], n2 = e2[1] - 1, r = e2[2], o = i2[0], s = i2[1], f = i2[2];
    return Date.UTC(a2, n2, r, o, s, f, 0) / 1e3;
  }
  function a(e2) {
    var a2 = e2.substr(0, 10).split("-"), n2 = e2.substr(11, 8).split(":"), r = e2.substr(19, 6).split(":").map(t), o = 3600 * r[0] + 60 * r[1], s = i(a2, n2);
    if ("number" == typeof (s -= o) && !isNaN(s)) return s;
  }
  function n(e2) {
    var t2 = e2.split(" "), a2 = i(t2[0].split(":"), t2[1].split(":"));
    if ("number" == typeof a2 && !isNaN(a2)) return a2;
  }
  e.exports = { parseDateWithSpecFormat: n, parseDateWithTimezoneFormat: a, parseExifDate: function(e2) {
    var t2 = 19 === e2.length && ":" === e2.charAt(4);
    return 25 === e2.length && "T" === e2.charAt(10) ? a(e2) : t2 ? n(e2) : void 0;
  } };
}, 72665: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.AbstractTokenizer = void 0;
  const a = i(690);
  t.AbstractTokenizer = class {
    constructor(e2) {
      this.position = 0, this.numBuffer = new Uint8Array(8), this.fileInfo = e2 || {};
    }
    async readToken(e2, t2 = this.position) {
      const i2 = Buffer.alloc(e2.len);
      if (await this.readBuffer(i2, { position: t2 }) < e2.len) throw new a.EndOfStreamError();
      return e2.get(i2, 0);
    }
    async peekToken(e2, t2 = this.position) {
      const i2 = Buffer.alloc(e2.len);
      if (await this.peekBuffer(i2, { position: t2 }) < e2.len) throw new a.EndOfStreamError();
      return e2.get(i2, 0);
    }
    async readNumber(e2) {
      if (await this.readBuffer(this.numBuffer, { length: e2.len }) < e2.len) throw new a.EndOfStreamError();
      return e2.get(this.numBuffer, 0);
    }
    async peekNumber(e2) {
      if (await this.peekBuffer(this.numBuffer, { length: e2.len }) < e2.len) throw new a.EndOfStreamError();
      return e2.get(this.numBuffer, 0);
    }
    async ignore(e2) {
      if (void 0 !== this.fileInfo.size) {
        const t2 = this.fileInfo.size - this.position;
        if (e2 > t2) return this.position += t2, t2;
      }
      return this.position += e2, e2;
    }
    async close() {
    }
    normalizeOptions(e2, t2) {
      if (t2 && void 0 !== t2.position && t2.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      return t2 ? { mayBeLess: true === t2.mayBeLess, offset: t2.offset ? t2.offset : 0, length: t2.length ? t2.length : e2.length - (t2.offset ? t2.offset : 0), position: t2.position ? t2.position : this.position } : { mayBeLess: false, offset: 0, length: e2.length, position: this.position };
    }
  };
}, 76311: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.fromBuffer = t.fromStream = t.EndOfStreamError = void 0;
  const a = i(58563), n = i(22457);
  var r = i(690);
  Object.defineProperty(t, "EndOfStreamError", { enumerable: true, get: function() {
    return r.EndOfStreamError;
  } }), t.fromStream = function(e2, t2) {
    return t2 = t2 || {}, new a.ReadStreamTokenizer(e2, t2);
  }, t.fromBuffer = function(e2, t2) {
    return new n.BufferTokenizer(e2, t2);
  };
}, 87626: (module, __unused_webpack_exports, __webpack_require__) => {
  "use strict";
  const Token = __webpack_require__(28742), strtok3 = __webpack_require__(76311), { stringToBytes, tarHeaderChecksumMatches, uint32SyncSafeToken } = __webpack_require__(88565), supported = __webpack_require__(64651), minimumBytes = 4100;
  async function fromStream(e) {
    const t = await strtok3.fromStream(e);
    try {
      return await fromTokenizer(t);
    } finally {
      await t.close();
    }
  }
  async function fromBuffer(e) {
    if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e))) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);
    const t = e instanceof Buffer ? e : Buffer.from(e);
    if (!(t && t.length > 1)) return;
    return fromTokenizer(strtok3.fromBuffer(t));
  }
  function _check(e, t, i) {
    i = { offset: 0, ...i };
    for (const [a, n] of t.entries()) if (i.mask) {
      if (n !== (i.mask[a] & e[a + i.offset])) return false;
    } else if (n !== e[a + i.offset]) return false;
    return true;
  }
  async function fromTokenizer(e) {
    try {
      return _fromTokenizer(e);
    } catch (e2) {
      if (!(e2 instanceof strtok3.EndOfStreamError)) throw e2;
    }
  }
  async function _fromTokenizer(e) {
    let t = Buffer.alloc(minimumBytes);
    const i = (e2, i2) => _check(t, e2, i2), a = (e2, t2) => i(stringToBytes(e2), t2);
    if (e.fileInfo.size || (e.fileInfo.size = Number.MAX_SAFE_INTEGER), await e.peekBuffer(t, { length: 12, mayBeLess: true }), i([66, 77])) return { ext: "bmp", mime: "image/bmp" };
    if (i([11, 119])) return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" };
    if (i([120, 1])) return { ext: "dmg", mime: "application/x-apple-diskimage" };
    if (i([77, 90])) return { ext: "exe", mime: "application/x-msdownload" };
    if (i([37, 33])) return await e.peekBuffer(t, { length: 24, mayBeLess: true }), a("PS-Adobe-", { offset: 2 }) && a(" EPSF-", { offset: 14 }) ? { ext: "eps", mime: "application/eps" } : { ext: "ps", mime: "application/postscript" };
    if (i([31, 160]) || i([31, 157])) return { ext: "Z", mime: "application/x-compress" };
    if (i([255, 216, 255])) return { ext: "jpg", mime: "image/jpeg" };
    if (i([73, 73, 188])) return { ext: "jxr", mime: "image/vnd.ms-photo" };
    if (i([31, 139, 8])) return { ext: "gz", mime: "application/gzip" };
    if (i([66, 90, 104])) return { ext: "bz2", mime: "application/x-bzip2" };
    if (a("ID3")) {
      await e.ignore(6);
      const n = await e.readToken(uint32SyncSafeToken);
      return e.position + n > e.fileInfo.size ? { ext: "mp3", mime: "audio/mpeg" } : (await e.ignore(n), fromTokenizer(e));
    }
    if (a("MP+")) return { ext: "mpc", mime: "audio/x-musepack" };
    if ((67 === t[0] || 70 === t[0]) && i([87, 83], { offset: 1 })) return { ext: "swf", mime: "application/x-shockwave-flash" };
    if (i([71, 73, 70])) return { ext: "gif", mime: "image/gif" };
    if (a("FLIF")) return { ext: "flif", mime: "image/flif" };
    if (a("8BPS")) return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
    if (a("WEBP", { offset: 8 })) return { ext: "webp", mime: "image/webp" };
    if (a("MPCK")) return { ext: "mpc", mime: "audio/x-musepack" };
    if (a("FORM")) return { ext: "aif", mime: "audio/aiff" };
    if (a("icns", { offset: 0 })) return { ext: "icns", mime: "image/icns" };
    if (i([80, 75, 3, 4])) {
      try {
        for (; e.position + 30 < e.fileInfo.size; ) {
          await e.readBuffer(t, { length: 30 });
          const r = { compressedSize: t.readUInt32LE(18), uncompressedSize: t.readUInt32LE(22), filenameLength: t.readUInt16LE(26), extraFieldLength: t.readUInt16LE(28) };
          if (r.filename = await e.readToken(new Token.StringType(r.filenameLength, "utf-8")), await e.ignore(r.extraFieldLength), "META-INF/mozilla.rsa" === r.filename) return { ext: "xpi", mime: "application/x-xpinstall" };
          if (r.filename.endsWith(".rels") || r.filename.endsWith(".xml")) {
            switch (r.filename.split("/")[0]) {
              case "_rels":
              default:
                break;
              case "word":
                return { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
              case "ppt":
                return { ext: "pptx", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation" };
              case "xl":
                return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
            }
          }
          if (r.filename.startsWith("xl/")) return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
          if (r.filename.startsWith("3D/") && r.filename.endsWith(".model")) return { ext: "3mf", mime: "model/3mf" };
          if ("mimetype" === r.filename && r.compressedSize === r.uncompressedSize) {
            switch (await e.readToken(new Token.StringType(r.compressedSize, "utf-8"))) {
              case "application/epub+zip":
                return { ext: "epub", mime: "application/epub+zip" };
              case "application/vnd.oasis.opendocument.text":
                return { ext: "odt", mime: "application/vnd.oasis.opendocument.text" };
              case "application/vnd.oasis.opendocument.spreadsheet":
                return { ext: "ods", mime: "application/vnd.oasis.opendocument.spreadsheet" };
              case "application/vnd.oasis.opendocument.presentation":
                return { ext: "odp", mime: "application/vnd.oasis.opendocument.presentation" };
            }
          }
          if (0 === r.compressedSize) {
            let o = -1;
            for (; o < 0 && e.position < e.fileInfo.size; ) await e.peekBuffer(t, { mayBeLess: true }), o = t.indexOf("504B0304", 0, "hex"), await e.ignore(o >= 0 ? o : t.length);
          } else await e.ignore(r.compressedSize);
        }
      } catch (s) {
        if (!(s instanceof strtok3.EndOfStreamError)) throw s;
      }
      return { ext: "zip", mime: "application/zip" };
    }
    if (a("OggS")) {
      await e.ignore(28);
      const f = Buffer.alloc(8);
      return await e.readBuffer(f), _check(f, [79, 112, 117, 115, 72, 101, 97, 100]) ? { ext: "opus", mime: "audio/opus" } : _check(f, [128, 116, 104, 101, 111, 114, 97]) ? { ext: "ogv", mime: "video/ogg" } : _check(f, [1, 118, 105, 100, 101, 111, 0]) ? { ext: "ogm", mime: "video/ogg" } : _check(f, [127, 70, 76, 65, 67]) ? { ext: "oga", mime: "audio/ogg" } : _check(f, [83, 112, 101, 101, 120, 32, 32]) ? { ext: "spx", mime: "audio/ogg" } : _check(f, [1, 118, 111, 114, 98, 105, 115]) ? { ext: "ogg", mime: "audio/ogg" } : { ext: "ogx", mime: "application/ogg" };
    }
    if (i([80, 75]) && (3 === t[2] || 5 === t[2] || 7 === t[2]) && (4 === t[3] || 6 === t[3] || 8 === t[3])) return { ext: "zip", mime: "application/zip" };
    if (a("ftyp", { offset: 4 }) && 96 & t[8]) {
      const p = t.toString("binary", 8, 12).replace("\0", " ").trim();
      switch (p) {
        case "avif":
          return { ext: "avif", mime: "image/avif" };
        case "mif1":
          return { ext: "heic", mime: "image/heif" };
        case "msf1":
          return { ext: "heic", mime: "image/heif-sequence" };
        case "heic":
        case "heix":
          return { ext: "heic", mime: "image/heic" };
        case "hevc":
        case "hevx":
          return { ext: "heic", mime: "image/heic-sequence" };
        case "qt":
          return { ext: "mov", mime: "video/quicktime" };
        case "M4V":
        case "M4VH":
        case "M4VP":
          return { ext: "m4v", mime: "video/x-m4v" };
        case "M4P":
          return { ext: "m4p", mime: "video/mp4" };
        case "M4B":
          return { ext: "m4b", mime: "audio/mp4" };
        case "M4A":
          return { ext: "m4a", mime: "audio/x-m4a" };
        case "F4V":
          return { ext: "f4v", mime: "video/mp4" };
        case "F4P":
          return { ext: "f4p", mime: "video/mp4" };
        case "F4A":
          return { ext: "f4a", mime: "audio/mp4" };
        case "F4B":
          return { ext: "f4b", mime: "audio/mp4" };
        case "crx":
          return { ext: "cr3", mime: "image/x-canon-cr3" };
        default:
          return p.startsWith("3g") ? p.startsWith("3g2") ? { ext: "3g2", mime: "video/3gpp2" } : { ext: "3gp", mime: "video/3gpp" } : { ext: "mp4", mime: "video/mp4" };
      }
    }
    if (a("MThd")) return { ext: "mid", mime: "audio/midi" };
    if (a("wOFF") && (i([0, 1, 0, 0], { offset: 4 }) || a("OTTO", { offset: 4 }))) return { ext: "woff", mime: "font/woff" };
    if (a("wOF2") && (i([0, 1, 0, 0], { offset: 4 }) || a("OTTO", { offset: 4 }))) return { ext: "woff2", mime: "font/woff2" };
    if (i([212, 195, 178, 161]) || i([161, 178, 195, 212])) return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" };
    if (a("DSD ")) return { ext: "dsf", mime: "audio/x-dsf" };
    if (a("LZIP")) return { ext: "lz", mime: "application/x-lzip" };
    if (a("fLaC")) return { ext: "flac", mime: "audio/x-flac" };
    if (i([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" };
    if (a("wvpk")) return { ext: "wv", mime: "audio/wavpack" };
    if (a("%PDF")) {
      await e.ignore(1350);
      const m = 10485760, l = Buffer.alloc(Math.min(m, e.fileInfo.size));
      return await e.readBuffer(l, { mayBeLess: true }), l.includes(Buffer.from("AIPrivateData")) ? { ext: "ai", mime: "application/postscript" } : { ext: "pdf", mime: "application/pdf" };
    }
    if (i([0, 97, 115, 109])) return { ext: "wasm", mime: "application/wasm" };
    if (i([73, 73, 42, 0])) return a("CR", { offset: 8 }) ? { ext: "cr2", mime: "image/x-canon-cr2" } : i([28, 0, 254, 0], { offset: 8 }) || i([31, 0, 11, 0], { offset: 8 }) ? { ext: "nef", mime: "image/x-nikon-nef" } : i([8, 0, 0, 0], { offset: 4 }) && (i([45, 0, 254, 0], { offset: 8 }) || i([39, 0, 254, 0], { offset: 8 })) ? { ext: "dng", mime: "image/x-adobe-dng" } : (t = Buffer.alloc(24), await e.peekBuffer(t), (i([16, 251, 134, 1], { offset: 4 }) || i([8, 0, 0, 0], { offset: 4 })) && i([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], { offset: 9 }) ? { ext: "arw", mime: "image/x-sony-arw" } : { ext: "tif", mime: "image/tiff" });
    if (i([77, 77, 0, 42])) return { ext: "tif", mime: "image/tiff" };
    if (a("MAC ")) return { ext: "ape", mime: "audio/ape" };
    if (i([26, 69, 223, 163])) {
      async function c() {
        const t2 = await e.peekNumber(Token.UINT8);
        let i2 = 128, a2 = 0;
        for (; 0 === (t2 & i2) && 0 !== i2; ) ++a2, i2 >>= 1;
        const n = Buffer.alloc(a2 + 1);
        return await e.readBuffer(n), n;
      }
      async function u() {
        const e2 = await c(), t2 = await c();
        t2[0] ^= 128 >> t2.length - 1;
        const i2 = Math.min(6, t2.length);
        return { id: e2.readUIntBE(0, e2.length), len: t2.readUIntBE(t2.length - i2, i2) };
      }
      async function d(t2, i2) {
        for (; i2 > 0; ) {
          const t3 = await u();
          if (17026 === t3.id) return e.readToken(new Token.StringType(t3.len, "utf-8"));
          await e.ignore(t3.len), --i2;
        }
      }
      const h = await u();
      switch (await d(0, h.len)) {
        case "webm":
          return { ext: "webm", mime: "video/webm" };
        case "matroska":
          return { ext: "mkv", mime: "video/x-matroska" };
        default:
          return;
      }
    }
    if (i([82, 73, 70, 70])) {
      if (i([65, 86, 73], { offset: 8 })) return { ext: "avi", mime: "video/vnd.avi" };
      if (i([87, 65, 86, 69], { offset: 8 })) return { ext: "wav", mime: "audio/vnd.wave" };
      if (i([81, 76, 67, 77], { offset: 8 })) return { ext: "qcp", mime: "audio/qcelp" };
    }
    if (a("SQLi")) return { ext: "sqlite", mime: "application/x-sqlite3" };
    if (i([78, 69, 83, 26])) return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
    if (a("Cr24")) return { ext: "crx", mime: "application/x-google-chrome-extension" };
    if (a("MSCF") || a("ISc(")) return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
    if (i([237, 171, 238, 219])) return { ext: "rpm", mime: "application/x-rpm" };
    if (i([197, 208, 211, 198])) return { ext: "eps", mime: "application/eps" };
    if (i([40, 181, 47, 253])) return { ext: "zst", mime: "application/zstd" };
    if (i([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" };
    if (a("#!AMR")) return { ext: "amr", mime: "audio/amr" };
    if (a("{\\rtf")) return { ext: "rtf", mime: "application/rtf" };
    if (i([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" };
    if (a("IMPM")) return { ext: "it", mime: "audio/x-it" };
    if (a("-lh0-", { offset: 2 }) || a("-lh1-", { offset: 2 }) || a("-lh2-", { offset: 2 }) || a("-lh3-", { offset: 2 }) || a("-lh4-", { offset: 2 }) || a("-lh5-", { offset: 2 }) || a("-lh6-", { offset: 2 }) || a("-lh7-", { offset: 2 }) || a("-lzs-", { offset: 2 }) || a("-lz4-", { offset: 2 }) || a("-lz5-", { offset: 2 }) || a("-lhd-", { offset: 2 })) return { ext: "lzh", mime: "application/x-lzh-compressed" };
    if (i([0, 0, 1, 186])) {
      if (i([33], { offset: 4, mask: [241] })) return { ext: "mpg", mime: "video/MP1S" };
      if (i([68], { offset: 4, mask: [196] })) return { ext: "mpg", mime: "video/MP2P" };
    }
    if (a("ITSF")) return { ext: "chm", mime: "application/vnd.ms-htmlhelp" };
    if (i([253, 55, 122, 88, 90, 0])) return { ext: "xz", mime: "application/x-xz" };
    if (a("<?xml ")) return { ext: "xml", mime: "application/xml" };
    if (i([55, 122, 188, 175, 39, 28])) return { ext: "7z", mime: "application/x-7z-compressed" };
    if (i([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6])) return { ext: "rar", mime: "application/x-rar-compressed" };
    if (a("solid ")) return { ext: "stl", mime: "model/stl" };
    if (a("BLENDER")) return { ext: "blend", mime: "application/x-blender" };
    if (a("!<arch>")) {
      await e.ignore(8);
      return "debian-binary" === await e.readToken(new Token.StringType(13, "ascii")) ? { ext: "deb", mime: "application/x-deb" } : { ext: "ar", mime: "application/x-unix-archive" };
    }
    if (i([137, 80, 78, 71, 13, 10, 26, 10])) {
      async function g() {
        return { length: await e.readToken(Token.INT32_BE), type: await e.readToken(new Token.StringType(4, "binary")) };
      }
      await e.ignore(8);
      do {
        const x = await g();
        if (x.length < 0) return;
        switch (x.type) {
          case "IDAT":
            return { ext: "png", mime: "image/png" };
          case "acTL":
            return { ext: "apng", mime: "image/apng" };
          default:
            await e.ignore(x.length + 4);
        }
      } while (e.position + 8 < e.fileInfo.size);
      return { ext: "png", mime: "image/png" };
    }
    if (i([65, 82, 82, 79, 87, 49, 0, 0])) return { ext: "arrow", mime: "application/x-apache-arrow" };
    if (i([103, 108, 84, 70, 2, 0, 0, 0])) return { ext: "glb", mime: "model/gltf-binary" };
    if (i([102, 114, 101, 101], { offset: 4 }) || i([109, 100, 97, 116], { offset: 4 }) || i([109, 111, 111, 118], { offset: 4 }) || i([119, 105, 100, 101], { offset: 4 })) return { ext: "mov", mime: "video/quicktime" };
    if (i([73, 73, 82, 79, 8, 0, 0, 0, 24])) return { ext: "orf", mime: "image/x-olympus-orf" };
    if (a("gimp xcf ")) return { ext: "xcf", mime: "image/x-xcf" };
    if (i([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) return { ext: "rw2", mime: "image/x-panasonic-rw2" };
    if (i([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      async function b() {
        const t2 = Buffer.alloc(16);
        return await e.readBuffer(t2), { id: t2, size: Number(await e.readToken(Token.UINT64_LE)) };
      }
      for (await e.ignore(30); e.position + 24 < e.fileInfo.size; ) {
        const w = await b();
        let v = w.size - 24;
        if (_check(w.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
          const S = Buffer.alloc(16);
          if (v -= await e.readBuffer(S), _check(S, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "audio/x-ms-asf" };
          if (_check(S, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "video/x-ms-asf" };
          break;
        }
        await e.ignore(v);
      }
      return { ext: "asf", mime: "application/vnd.ms-asf" };
    }
    if (i([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) return { ext: "ktx", mime: "image/ktx" };
    if ((i([126, 16, 4]) || i([126, 24, 4])) && i([48, 77, 73, 69], { offset: 4 })) return { ext: "mie", mime: "application/x-mie" };
    if (i([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 })) return { ext: "shp", mime: "application/x-esri-shape" };
    if (i([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
      await e.ignore(20);
      switch (await e.readToken(new Token.StringType(4, "ascii"))) {
        case "jp2 ":
          return { ext: "jp2", mime: "image/jp2" };
        case "jpx ":
          return { ext: "jpx", mime: "image/jpx" };
        case "jpm ":
          return { ext: "jpm", mime: "image/jpm" };
        case "mjp2":
          return { ext: "mj2", mime: "image/mj2" };
        default:
          return;
      }
    }
    if (i([255, 10]) || i([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) return { ext: "jxl", mime: "image/jxl" };
    if (i([0, 0, 1, 186]) || i([0, 0, 1, 179])) return { ext: "mpg", mime: "video/mpeg" };
    if (i([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" };
    if (i([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" };
    if (i([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" };
    if (i([208, 207, 17, 224, 161, 177, 26, 225])) return { ext: "cfb", mime: "application/x-cfb" };
    if (await e.peekBuffer(t, { length: Math.min(256, e.fileInfo.size), mayBeLess: true }), a("BEGIN:")) {
      if (a("VCARD", { offset: 6 })) return { ext: "vcf", mime: "text/vcard" };
      if (a("VCALENDAR", { offset: 6 })) return { ext: "ics", mime: "text/calendar" };
    }
    if (a("FUJIFILMCCD-RAW")) return { ext: "raf", mime: "image/x-fujifilm-raf" };
    if (a("Extended Module:")) return { ext: "xm", mime: "audio/x-xm" };
    if (a("Creative Voice File")) return { ext: "voc", mime: "audio/x-voc" };
    if (i([4, 0, 0, 0]) && t.length >= 16) {
      const y = t.readUInt32LE(12);
      if (y > 12 && t.length >= y + 16) try {
        const I = t.slice(16, y + 16).toString();
        if (JSON.parse(I).files) return { ext: "asar", mime: "application/x-asar" };
      } catch (E) {
      }
    }
    if (i([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return { ext: "mxf", mime: "application/mxf" };
    if (a("SCRM", { offset: 44 })) return { ext: "s3m", mime: "audio/x-s3m" };
    if (i([71], { offset: 4 }) && (i([71], { offset: 192 }) || i([71], { offset: 196 }))) return { ext: "mts", mime: "video/mp2t" };
    if (i([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) return { ext: "mobi", mime: "application/x-mobipocket-ebook" };
    if (i([68, 73, 67, 77], { offset: 128 })) return { ext: "dcm", mime: "application/dicom" };
    if (i([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) return { ext: "lnk", mime: "application/x.ms.shortcut" };
    if (i([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) return { ext: "alias", mime: "application/x.apple.alias" };
    if (i([76, 80], { offset: 34 }) && (i([0, 0, 1], { offset: 8 }) || i([1, 0, 2], { offset: 8 }) || i([2, 0, 2], { offset: 8 }))) return { ext: "eot", mime: "application/vnd.ms-fontobject" };
    if (i([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) return { ext: "indd", mime: "application/x-indesign" };
    if (await e.peekBuffer(t, { length: Math.min(512, e.fileInfo.size), mayBeLess: true }), tarHeaderChecksumMatches(t)) return { ext: "tar", mime: "application/x-tar" };
    if (i([255, 254, 255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0])) return { ext: "skp", mime: "application/vnd.sketchup.skp" };
    if (a("-----BEGIN PGP MESSAGE-----")) return { ext: "pgp", mime: "application/pgp-encrypted" };
    if (t.length >= 2 && i([255, 224], { offset: 0, mask: [255, 224] })) {
      if (i([16], { offset: 1, mask: [22] })) return i([8], { offset: 1, mask: [8] }), { ext: "aac", mime: "audio/aac" };
      if (i([2], { offset: 1, mask: [6] })) return { ext: "mp3", mime: "audio/mpeg" };
      if (i([4], { offset: 1, mask: [6] })) return { ext: "mp2", mime: "audio/mpeg" };
      if (i([6], { offset: 1, mask: [6] })) return { ext: "mp1", mime: "audio/mpeg" };
    }
  }
  const stream = (readableStream) => new Promise((resolve, reject) => {
    const stream = eval("require")("stream");
    readableStream.on("error", reject), readableStream.once("readable", async () => {
      const e = new stream.PassThrough();
      let t;
      t = stream.pipeline ? stream.pipeline(readableStream, e, () => {
      }) : readableStream.pipe(e);
      const i = readableStream.read(minimumBytes) || readableStream.read() || Buffer.alloc(0);
      try {
        const t2 = await fromBuffer(i);
        e.fileType = t2;
      } catch (e2) {
        reject(e2);
      }
      resolve(t);
    });
  }), fileType = { fromStream, fromTokenizer, fromBuffer, stream };
  Object.defineProperty(fileType, "extensions", { get: () => new Set(supported.extensions) }), Object.defineProperty(fileType, "mimeTypes", { get: () => new Set(supported.mimeTypes) }), module.exports = fileType;
}, 88565: (e, t) => {
  "use strict";
  t.stringToBytes = (e2) => [...e2].map((e3) => e3.charCodeAt(0)), t.tarHeaderChecksumMatches = (e2, t2 = 0) => {
    const i = parseInt(e2.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(), 8);
    if (isNaN(i)) return false;
    let a = 256;
    for (let i2 = t2; i2 < t2 + 148; i2++) a += e2[i2];
    for (let i2 = t2 + 156; i2 < t2 + 512; i2++) a += e2[i2];
    return i === a;
  }, t.uint32SyncSafeToken = { get: (e2, t2) => 127 & e2[t2 + 3] | e2[t2 + 2] << 7 | e2[t2 + 1] << 14 | e2[t2] << 21, len: 4 };
}, 90512: (e, t, i) => {
  var a = i(52421), n = i(14333), r = i(67676);
  function o(e2, t2, i2, a2, n2, r2, o2) {
    this.startMarker = e2, this.tags = t2, this.imageSize = i2, this.thumbnailOffset = a2, this.thumbnailLength = n2, this.thumbnailType = r2, this.app1Offset = o2;
  }
  function s(e2) {
    this.stream = e2, this.flags = { readBinaryTags: false, resolveTagNames: true, simplifyValues: true, imageSize: true, hidePointers: true, returnTags: true };
  }
  o.prototype = { hasThumbnail: function(e2) {
    return !(!this.thumbnailOffset || !this.thumbnailLength) && ("string" != typeof e2 || ("image/jpeg" === e2.toLowerCase().trim() ? 6 === this.thumbnailType : "image/tiff" === e2.toLowerCase().trim() && 1 === this.thumbnailType));
  }, getThumbnailOffset: function() {
    return this.app1Offset + 6 + this.thumbnailOffset;
  }, getThumbnailLength: function() {
    return this.thumbnailLength;
  }, getThumbnailBuffer: function() {
    return this._getThumbnailStream().nextBuffer(this.thumbnailLength);
  }, _getThumbnailStream: function() {
    return this.startMarker.openWithOffset(this.getThumbnailOffset());
  }, getImageSize: function() {
    return this.imageSize;
  }, getThumbnailSize: function() {
    var e2, t2 = this._getThumbnailStream();
    return a.parseSections(t2, function(t3, i2) {
      "SOF" === a.getSectionName(t3).name && (e2 = a.getSizeFromSOFSection(i2));
    }), e2;
  } }, s.prototype = { enableBinaryFields: function(e2) {
    return this.flags.readBinaryTags = !!e2, this;
  }, enablePointers: function(e2) {
    return this.flags.hidePointers = !e2, this;
  }, enableTagNames: function(e2) {
    return this.flags.resolveTagNames = !!e2, this;
  }, enableImageSize: function(e2) {
    return this.flags.imageSize = !!e2, this;
  }, enableReturnTags: function(e2) {
    return this.flags.returnTags = !!e2, this;
  }, enableSimpleValues: function(e2) {
    return this.flags.simplifyValues = !!e2, this;
  }, parse: function() {
    var e2, t2, s2, f, p, m, l, c, u, d = this.stream.mark(), h = d.openWithOffset(0), g = this.flags;
    return g.resolveTagNames && (l = i(4015)), g.resolveTagNames ? (e2 = {}, c = function(t3) {
      return e2[t3.name];
    }, u = function(t3, i2) {
      e2[t3.name] = i2;
    }) : (e2 = [], c = function(t3) {
      var i2;
      for (i2 = 0; i2 < e2.length; ++i2) if (e2[i2].type === t3.type && e2[i2].section === t3.section) return e2.value;
    }, u = function(t3, i2) {
      var a2;
      for (a2 = 0; a2 < e2.length; ++a2) if (e2[a2].type === t3.type && e2[a2].section === t3.section) return void (e2.value = i2);
    }), a.parseSections(h, function(i2, o2) {
      var c2 = o2.offsetFrom(d);
      225 === i2 ? n.parseTags(o2, function(t3, i3, a2, o3) {
        if (g.readBinaryTags || 7 !== o3) {
          if (513 === i3) {
            if (s2 = a2[0], g.hidePointers) return;
          } else if (514 === i3) {
            if (f = a2[0], g.hidePointers) return;
          } else if (259 === i3 && (p = a2[0], g.hidePointers)) return;
          if (g.returnTags) if (g.simplifyValues && (a2 = r.simplifyValue(a2, o3)), g.resolveTagNames) {
            var m2 = (t3 === n.GPSIFD ? l.gps : l.exif)[i3];
            m2 || (m2 = l.exif[i3]), e2.hasOwnProperty(m2) || (e2[m2] = a2);
          } else e2.push({ section: t3, type: i3, value: a2 });
        }
      }) && (m = c2) : g.imageSize && "SOF" === a.getSectionName(i2).name && (t2 = a.getSizeFromSOFSection(o2));
    }), g.simplifyValues && (r.castDegreeValues(c, u), r.castDateValues(c, u)), new o(d, e2, t2, s2, f, p, m);
  } }, e.exports = s;
}, 91524: (e, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.EndOfStreamError = t.defaultMessages = void 0, t.defaultMessages = "End-Of-Stream";
  class i extends Error {
    constructor() {
      super(t.defaultMessages);
    }
  }
  t.EndOfStreamError = i;
}, 92774: (e) => {
  function t(e2, t2, i, a, n, r) {
    this.global = n, t2 = t2 || 0, i = i || e2.byteLength - t2, this.arrayBuffer = e2.slice(t2, t2 + i), this.view = new n.DataView(this.arrayBuffer, 0, this.arrayBuffer.byteLength), this.setBigEndian(a), this.offset = 0, this.parentOffset = (r || 0) + t2;
  }
  t.prototype = { setBigEndian: function(e2) {
    this.littleEndian = !e2;
  }, nextUInt8: function() {
    var e2 = this.view.getUint8(this.offset);
    return this.offset += 1, e2;
  }, nextInt8: function() {
    var e2 = this.view.getInt8(this.offset);
    return this.offset += 1, e2;
  }, nextUInt16: function() {
    var e2 = this.view.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, e2;
  }, nextUInt32: function() {
    var e2 = this.view.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e2;
  }, nextInt16: function() {
    var e2 = this.view.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e2;
  }, nextInt32: function() {
    var e2 = this.view.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e2;
  }, nextFloat: function() {
    var e2 = this.view.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e2;
  }, nextDouble: function() {
    var e2 = this.view.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e2;
  }, nextBuffer: function(e2) {
    var t2 = this.arrayBuffer.slice(this.offset, this.offset + e2);
    return this.offset += e2, t2;
  }, remainingLength: function() {
    return this.arrayBuffer.byteLength - this.offset;
  }, nextString: function(e2) {
    var t2 = this.arrayBuffer.slice(this.offset, this.offset + e2);
    return t2 = String.fromCharCode.apply(null, new this.global.Uint8Array(t2)), this.offset += e2, t2;
  }, mark: function() {
    var e2 = this;
    return { openWithOffset: function(i) {
      return i = (i || 0) + this.offset, new t(e2.arrayBuffer, i, e2.arrayBuffer.byteLength - i, !e2.littleEndian, e2.global, e2.parentOffset);
    }, offset: this.offset, getParentOffset: function() {
      return e2.parentOffset;
    } };
  }, offsetFrom: function(e2) {
    return this.parentOffset + this.offset - (e2.offset + e2.getParentOffset());
  }, skip: function(e2) {
    this.offset += e2;
  }, branch: function(e2, i) {
    return i = "number" == typeof i ? i : this.arrayBuffer.byteLength - (this.offset + e2), new t(this.arrayBuffer, this.offset + e2, i, !this.littleEndian, this.global, this.parentOffset);
  } }, e.exports = t;
}, 95273: (e, t, i) => {
  "use strict";
  i.r(t), i.d(t, { BlendMode: () => d, HorizontalAlign: () => c, VerticalAlign: () => u, composite: () => P, createJimp: () => M, getExifOrientation: () => F });
  var a = {};
  i.r(a), i.d(a, { add: () => w, darken: () => y, difference: () => T, dstOver: () => x, exclusion: () => k, hardLight: () => E, lighten: () => I, multiply: () => b, names: () => B, overlay: () => S, screen: () => v, srcOver: () => g });
  var n, r = i(81958);
  !(function(e2) {
    e2[e2.EXTEND = 1] = "EXTEND", e2[e2.WRAP = 2] = "WRAP", e2[e2.CROP = 3] = "CROP";
  })(n || (n = {}));
  r.Ik({ bitmap: r.Ik({ data: r.KC([r.Nl(Buffer), r.Nl(Uint8Array)]), width: r.ai(), height: r.ai() }) });
  var o = i(12716), s = i(87626);
  function f(e2, t2) {
    return e2.then(function(e3) {
      return [null, e3];
    }).catch(function(e3) {
      return t2 && Object.assign(e3, t2), [e3, void 0];
    });
  }
  var p = i(79896);
  const m = p.promises.readFile, l = p.promises.writeFile;
  var c, u, d, h = i(51060);
  function g(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a;
    return { r: (e2.r * e2.a + t2.r * t2.a * (1 - e2.a)) / a2, g: (e2.g * e2.a + t2.g * t2.a * (1 - e2.a)) / a2, b: (e2.b * e2.a + t2.b * t2.a * (1 - e2.a)) / a2, a: a2 };
  }
  function x(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a;
    return { r: (t2.r * t2.a + e2.r * e2.a * (1 - t2.a)) / a2, g: (t2.g * t2.a + e2.g * e2.a * (1 - t2.a)) / a2, b: (t2.b * t2.a + e2.b * e2.a * (1 - t2.a)) / a2, a: a2 };
  }
  function b(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  function w(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a;
    return { r: (n2 + t2.r * t2.a) / a2, g: (r2 + t2.g * t2.a) / a2, b: (o2 + t2.b * t2.a) / a2, a: a2 };
  }
  function v(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (n2 * t2.a + s2 * e2.a - n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (r2 * t2.a + f2 * e2.a - r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (o2 * t2.a + p2 * e2.a - o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  function S(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (2 * s2 <= t2.a ? 2 * n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a) : n2 * (1 + t2.a) + s2 * (1 + e2.a) - 2 * s2 * n2 - t2.a * e2.a) / a2, g: (2 * f2 <= t2.a ? 2 * r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a) : r2 * (1 + t2.a) + f2 * (1 + e2.a) - 2 * f2 * r2 - t2.a * e2.a) / a2, b: (2 * p2 <= t2.a ? 2 * o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a) : o2 * (1 + t2.a) + p2 * (1 + e2.a) - 2 * p2 * o2 - t2.a * e2.a) / a2, a: a2 };
  }
  function y(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (Math.min(n2 * t2.a, s2 * e2.a) + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (Math.min(r2 * t2.a, f2 * e2.a) + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (Math.min(o2 * t2.a, p2 * e2.a) + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  function I(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (Math.max(n2 * t2.a, s2 * e2.a) + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (Math.max(r2 * t2.a, f2 * e2.a) + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (Math.max(o2 * t2.a, p2 * e2.a) + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  function E(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (2 * n2 <= e2.a ? 2 * n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a) : n2 * (1 + t2.a) + s2 * (1 + e2.a) - 2 * s2 * n2 - t2.a * e2.a) / a2, g: (2 * r2 <= e2.a ? 2 * r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a) : r2 * (1 + t2.a) + f2 * (1 + e2.a) - 2 * f2 * r2 - t2.a * e2.a) / a2, b: (2 * o2 <= e2.a ? 2 * o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a) : o2 * (1 + t2.a) + p2 * (1 + e2.a) - 2 * p2 * o2 - t2.a * e2.a) / a2, a: a2 };
  }
  function T(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (n2 + s2 - 2 * Math.min(n2 * t2.a, s2 * e2.a)) / a2, g: (r2 + f2 - 2 * Math.min(r2 * t2.a, f2 * e2.a)) / a2, b: (o2 + p2 - 2 * Math.min(o2 * t2.a, p2 * e2.a)) / a2, a: a2 };
  }
  function k(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (n2 * t2.a + s2 * e2.a - 2 * n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (r2 * t2.a + f2 * e2.a - 2 * r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (o2 * t2.a + p2 * e2.a - 2 * o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  !(function(e2) {
    e2[e2.LEFT = 1] = "LEFT", e2[e2.CENTER = 2] = "CENTER", e2[e2.RIGHT = 4] = "RIGHT";
  })(c || (c = {})), (function(e2) {
    e2[e2.TOP = 8] = "TOP", e2[e2.MIDDLE = 16] = "MIDDLE", e2[e2.BOTTOM = 32] = "BOTTOM";
  })(u || (u = {})), (function(e2) {
    e2.SRC_OVER = "srcOver", e2.DST_OVER = "dstOver", e2.MULTIPLY = "multiply", e2.ADD = "add", e2.SCREEN = "screen", e2.OVERLAY = "overlay", e2.DARKEN = "darken", e2.LIGHTEN = "lighten", e2.HARD_LIGHT = "hardLight", e2.DIFFERENCE = "difference", e2.EXCLUSION = "exclusion";
  })(d || (d = {}));
  const B = [g, x, b, w, v, S, y, I, E, T, k];
  function P(e2, t2, i2 = 0, r2 = 0, s2 = {}) {
    if (!(t2 instanceof e2.constructor)) throw new Error("The source must be a Jimp image");
    if ("number" != typeof i2 || "number" != typeof r2) throw new Error("x and y must be numbers");
    const { mode: f2 = d.SRC_OVER } = s2;
    let { opacitySource: p2 = 1, opacityDest: m2 = 1 } = s2;
    ("number" != typeof p2 || p2 < 0 || p2 > 1) && (p2 = 1), ("number" != typeof m2 || m2 < 0 || m2 > 1) && (m2 = 1);
    const l2 = a[f2];
    return i2 = Math.round(i2), r2 = Math.round(r2), 1 !== m2 && e2.scan((t3, i3, a2) => {
      const n2 = e2.bitmap.data[a2 + 3] * m2;
      e2.bitmap.data[a2 + 3] = n2;
    }), t2.scan((a2, s3, f3) => {
      const m3 = e2.getPixelIndex(i2 + a2, r2 + s3, n.CROP);
      if (-1 === m3) return;
      const c2 = l2({ r: t2.bitmap.data[f3 + 0] / 255, g: t2.bitmap.data[f3 + 1] / 255, b: t2.bitmap.data[f3 + 2] / 255, a: t2.bitmap.data[f3 + 3] / 255 }, { r: e2.bitmap.data[m3 + 0] / 255, g: e2.bitmap.data[m3 + 1] / 255, b: e2.bitmap.data[m3 + 2] / 255, a: e2.bitmap.data[m3 + 3] / 255 }, p2);
      e2.bitmap.data[m3 + 0] = (0, o.QH)(255 * c2.r), e2.bitmap.data[m3 + 1] = (0, o.QH)(255 * c2.g), e2.bitmap.data[m3 + 2] = (0, o.QH)(255 * c2.b), e2.bitmap.data[m3 + 3] = (0, o.QH)(255 * c2.a);
    }), e2;
  }
  var D = i(15983);
  function F(e2) {
    const t2 = e2._exif;
    return t2 && t2.tags && t2.tags.Orientation || 1;
  }
  function O(e2) {
    if (F(e2) < 2) return;
    const t2 = (function(e3) {
      const t3 = e3.bitmap.width, i3 = e3.bitmap.height;
      switch (F(e3)) {
        case 1:
        default:
          return null;
        case 2:
          return function(e4, i4) {
            return [t3 - e4 - 1, i4];
          };
        case 3:
          return function(e4, a3) {
            return [t3 - e4 - 1, i3 - a3 - 1];
          };
        case 4:
          return function(e4, t4) {
            return [e4, i3 - t4 - 1];
          };
        case 5:
          return function(e4, t4) {
            return [t4, e4];
          };
        case 6:
          return function(e4, t4) {
            return [t4, i3 - e4 - 1];
          };
        case 7:
          return function(e4, a3) {
            return [t3 - a3 - 1, i3 - e4 - 1];
          };
        case 8:
          return function(e4, i4) {
            return [t3 - i4 - 1, e4];
          };
      }
    })(e2), i2 = F(e2) > 4, a2 = i2 ? e2.bitmap.height : e2.bitmap.width, n2 = i2 ? e2.bitmap.width : e2.bitmap.height;
    t2 && (function(e3, t3, i3, a3) {
      const n3 = e3.bitmap.data, r2 = e3.bitmap.width, o2 = Buffer.alloc(n3.length);
      for (let e4 = 0; e4 < t3; e4++) for (let s2 = 0; s2 < i3; s2++) {
        const [i4, f2] = a3(e4, s2), p2 = t3 * s2 + e4 << 2, m2 = r2 * f2 + i4 << 2, l2 = n3.readUInt32BE(m2);
        o2.writeUInt32BE(l2, p2);
      }
      e3.bitmap.data = o2, e3.bitmap.width = t3, e3.bitmap.height = i3, e3._exif.tags.Orientation = 1;
    })(e2, a2, n2, t2);
  }
  const L = { data: Buffer.alloc(0), width: 0, height: 0 };
  function C(e2) {
    const t2 = Buffer.alloc(e2.byteLength), i2 = new Uint8Array(e2);
    for (let e3 = 0; e3 < t2.length; ++e3) t2[e3] = i2[e3];
    return t2;
  }
  function M({ plugins: e2, formats: t2 } = {}) {
    const i2 = e2 || [], a2 = (t2 || []).map((e3) => e3()), r2 = class {
      bitmap = L;
      background = 0;
      formats = [];
      mime;
      constructor(e3 = L) {
        if (this.formats = a2, "data" in e3) this.bitmap = e3;
        else if (this.bitmap = { data: Buffer.alloc(e3.width * e3.height * 4), width: e3.width, height: e3.height }, e3.color) {
          this.background = "string" == typeof e3.color ? (0, o.by)(e3.color) : e3.color;
          for (let e4 = 0; e4 < this.bitmap.data.length; e4 += 4) this.bitmap.data.writeUInt32BE(this.background, e4);
        }
        for (const e4 of i2) for (const t3 in e4) this[t3] = (...i3) => {
          const a3 = e4[t3]?.(this, ...i3);
          return "object" == typeof a3 && "bitmap" in a3 ? (this.bitmap = a3.bitmap, this) : a3;
        };
      }
      static async read(e3, t3) {
        if (Buffer.isBuffer(e3) || e3 instanceof ArrayBuffer) return this.fromBuffer(e3);
        if ((0, p.existsSync)(e3)) return this.fromBuffer(await m(e3));
        const [i3, a3] = await f(fetch(e3));
        if (i3) throw new Error(`Could not load Buffer from URL: ${e3}`);
        if (!a3.ok) throw new Error(`HTTP Status ${a3.status} for url ${e3}`);
        const [n2, r3] = await f(a3.arrayBuffer());
        if (n2) throw new Error(`Could not load Buffer from ${e3}`);
        const o2 = C(r3);
        return this.fromBuffer(o2, t3);
      }
      static fromBitmap(e3) {
        let t3;
        if (e3.data instanceof Buffer && (t3 = Buffer.from(e3.data)), (e3.data instanceof Uint8Array || e3.data instanceof Uint8ClampedArray) && (t3 = Buffer.from(e3.data.buffer)), Array.isArray(e3.data) && (t3 = Buffer.concat(e3.data.map((e4) => Buffer.from(e4.toString(16).padStart(8, "0"), "hex")))), !t3) throw new Error("data must be a Buffer");
        if ("number" != typeof e3.height || "number" != typeof e3.width) throw new Error("bitmap must have width and height");
        return new r2({ height: e3.height, width: e3.width, data: t3 });
      }
      static async fromBuffer(e3, t3) {
        const i3 = e3 instanceof ArrayBuffer ? C(e3) : e3, n2 = await s.fromBuffer(i3);
        if (!n2 || !n2.mime) throw new Error("Could not find MIME for Buffer");
        const o2 = a2.find((e4) => e4.mime === n2.mime);
        if (!o2 || !o2.decode) throw new Error(`Mime type ${n2.mime} does not support decoding`);
        const f2 = new r2(await o2.decode(i3, t3?.[o2.mime]));
        return f2.mime = n2.mime, (async function(e4, t4) {
          try {
            e4._exif = D.create(t4).parse(), O(e4);
          } catch {
          }
        })(f2, i3), f2;
      }
      inspect() {
        return "<Jimp " + (this.bitmap === L ? "pending..." : this.bitmap.width + "x" + this.bitmap.height) + ">";
      }
      toString() {
        return "[object Jimp]";
      }
      get width() {
        return this.bitmap.width;
      }
      get height() {
        return this.bitmap.height;
      }
      async getBuffer(e3, t3) {
        const i3 = this.formats.find((t4) => t4.mime === e3);
        if (!i3 || !i3.encode) throw new Error(`Unsupported MIME type: ${e3}`);
        let a3;
        return i3.hasAlpha ? a3 = this : (a3 = new r2({ width: this.bitmap.width, height: this.bitmap.height, color: this.background }), P(a3, this)), i3.encode(a3.bitmap, t3);
      }
      async getBase64(e3, t3) {
        return "data:" + e3 + ";base64," + (await this.getBuffer(e3, t3)).toString("base64");
      }
      async write(e3, t3) {
        const i3 = h.getType(e3);
        await l(e3, await this.getBuffer(i3, t3));
      }
      clone() {
        return new r2({ ...this.bitmap, data: Buffer.from(this.bitmap.data) });
      }
      getPixelIndex(e3, t3, i3) {
        let a3, r3;
        if (i3 || (i3 = n.EXTEND), "number" != typeof e3 || "number" != typeof t3) throw new Error("x and y must be numbers");
        a3 = e3 = Math.round(e3), r3 = t3 = Math.round(t3), i3 === n.EXTEND && (e3 < 0 && (a3 = 0), e3 >= this.bitmap.width && (a3 = this.bitmap.width - 1), t3 < 0 && (r3 = 0), t3 >= this.bitmap.height && (r3 = this.bitmap.height - 1)), i3 === n.WRAP && (e3 < 0 && (a3 = this.bitmap.width + e3), e3 >= this.bitmap.width && (a3 = e3 % this.bitmap.width), t3 < 0 && (r3 = this.bitmap.height + t3), t3 >= this.bitmap.height && (r3 = t3 % this.bitmap.height));
        let o2 = this.bitmap.width * r3 + a3 << 2;
        return (a3 < 0 || a3 >= this.bitmap.width) && (o2 = -1), (r3 < 0 || r3 >= this.bitmap.height) && (o2 = -1), o2;
      }
      getPixelColor(e3, t3) {
        if ("number" != typeof e3 || "number" != typeof t3) throw new Error("x and y must be numbers");
        const i3 = this.getPixelIndex(e3, t3);
        return this.bitmap.data.readUInt32BE(i3);
      }
      setPixelColor(e3, t3, i3) {
        if ("number" != typeof e3 || "number" != typeof t3 || "number" != typeof i3) throw new Error("hex, x and y must be numbers");
        const a3 = this.getPixelIndex(t3, i3);
        return this.bitmap.data.writeUInt32BE(e3, a3), this;
      }
      hasAlpha() {
        const { width: e3, height: t3, data: i3 } = this.bitmap, a3 = e3 * t3 << 2;
        for (let e4 = 3; e4 < a3; e4 += 4) if (255 !== i3[e4]) return true;
        return false;
      }
      composite(e3, t3 = 0, i3 = 0, a3 = {}) {
        return P(this, e3, t3, i3, a3);
      }
      scan(e3, t3, i3, a3, n2) {
        return (0, o.SQ)(this, e3, t3, i3, a3, n2);
      }
      scanIterator(e3 = 0, t3 = 0, i3 = this.bitmap.width, a3 = this.bitmap.height) {
        if ("number" != typeof e3 || "number" != typeof t3) throw new Error("x and y must be numbers");
        if ("number" != typeof i3 || "number" != typeof a3) throw new Error("w and h must be numbers");
        return (0, o.QQ)(this, e3, t3, i3, a3);
      }
    };
    return r2;
  }
} };
