(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{445:function(e,n,a){"use strict";a.r(n);var t=a(56),u=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"yuv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yuv"}},[e._v("#")]),e._v(" YUV")]),e._v(" "),a("p",[e._v("CMSampleBufferRef介绍\n这个结构在iOS中表示一帧音频/视频数据。\n它里面包含了这一帧数据的内容和格式。\n我们可以把它的内容取出来，提取出/转换成 我们想要的数据。")]),e._v(" "),a("p",[e._v("代表视频的CMSampleBufferRef中保存的数据是yuv420格式的视频帧(因为我们在视频输出设置中将输出格式设为：kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange)。")]),e._v(" "),a("p",[e._v("代表音频的CMSampleBufferRef中保存的数据是PCM格式的音频帧。")]),e._v(" "),a("p",[e._v("yuv是什么？NV12又是什么？\n视频是由一帧一帧的数据连接而成，而一帧视频数据其实就是一张图片。\nyuv是一种图片储存格式，跟RGB格式类似。\nRGB格式的图片很好理解，计算机中的大多数图片，都是以RGB格式存储的。\nyuv中，y表示亮度，单独只有y数据就可以形成一张图片，只不过这张图片是灰色的。u和v表示色差(u和v也被称为：Cb－蓝色差，Cr－红色差)，\n为什么要yuv？\n有一定历史原因，最早的电视信号，为了兼容黑白电视，采用的就是yuv格式。\n一张yuv的图像，去掉uv，只保留y，这张图片就是黑白的。\n而且yuv可以通过抛弃色差来进行带宽优化。\n比如yuv420格式图像相比RGB来说，要节省一半的字节大小，抛弃相邻的色差对于人眼来说，差别不大。\n一张yuv格式的图像，占用字节数为 (width * height + (width * height) / 4 + (width * height) / 4) = (width * height) * 3 / 2\n一张RGB格式的图像，占用字节数为（width * height） * 3\n在传输上，yuv格式的视频也更灵活(yuv3种数据可分别传输)。\n很多视频编码器最初是不支持rgb格式的。但是所有的视频编码器都支持yuv格式。\n综合来讲，我们选择使用yuv格式，所以我们编码之前，首先将视频数据转成yuv格式。\n我们这里使用的就是yuv420格式的视频。\nyuv420也包含不同的数据排列格式：I420，NV12，NV21.\n其格式分别如下，\nI420格式：y,u,v 3个部分分别存储：Y0,Y1...Yn,U0,U1...Un/2,V0,V1...Vn/2\nNV12格式：y和uv 2个部分分别存储：Y0,Y1...Yn,U0,V0,U1,V1...Un/2,Vn/2\nNV21格式：同NV12，只是U和V的顺序相反。\n综合来说，除了存储顺序不同之外，上述格式对于显示来说没有任何区别。\n使用哪种视频的格式，取决于初始化相机时设置的视频输出格式。")]),e._v(" "),a("p",[e._v("从CMSampleBufferRef中提取yuv数据\n在前面的文章(使用系统接口捕获视频)中，初始化输出设备时，我们将输出的数据设置为kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange。\n因此在CMSampleBufferRef中保存的是yuv420(NV12)格式数据。\n通过下面的方法将CMSampleBufferRef转为yuv420(NV12)。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n// AWVideoEncoder.m文件\n-(NSData *) convertVideoSmapleBufferToYuvData:(CMSampleBufferRef) videoSample{\n    // 获取yuv数据\n    // 通过CMSampleBufferGetImageBuffer方法，获得CVImageBufferRef。\n    // 这里面就包含了yuv420(NV12)数据的指针\n    CVImageBufferRef pixelBuffer = CMSampleBufferGetImageBuffer(videoSample);\n    \n    //表示开始操作数据\n    CVPixelBufferLockBaseAddress(pixelBuffer, 0);\n    \n    //图像宽度（像素）\n    size_t pixelWidth = CVPixelBufferGetWidth(pixelBuffer);\n    //图像高度（像素）\n    size_t pixelHeight = CVPixelBufferGetHeight(pixelBuffer);\n    //yuv中的y所占字节数\n    size_t y_size = pixelWidth * pixelHeight;\n    //yuv中的uv所占的字节数\n    size_t uv_size = y_size / 2;\n    \n    uint8_t *yuv_frame = aw_alloc(uv_size + y_size);\n    \n    //获取CVImageBufferRef中的y数据\n    uint8_t *y_frame = CVPixelBufferGetBaseAddressOfPlane(pixelBuffer, 0);\n    memcpy(yuv_frame, y_frame, y_size);\n    \n    //获取CMVImageBufferRef中的uv数据\n    uint8_t *uv_frame = CVPixelBufferGetBaseAddressOfPlane(pixelBuffer, 1);\n    memcpy(yuv_frame + y_size, uv_frame, uv_size);\n    \n    CVPixelBufferUnlockBaseAddress(pixelBuffer, 0);\n    \n    //返回数据\n    return [NSData dataWithBytesNoCopy:yuv_frame length:y_size + uv_size];\n}\n\n\n\n")])])]),a("p",[e._v("将GPUImage获取到的BGRA格式的图片转成yuv(NV12)格式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//AWGPUImageAVCapture.m文件\n-(void)newFrameReadyAtTime:(CMTime)frameTime atIndex:(NSInteger)textureIndex{\n    [super newFrameReadyAtTime:frameTime atIndex:textureIndex];\n    if(!self.capture || !self.capture.isCapturing){\n        return;\n    }\n    //将bgra转为yuv\n    //图像宽度\n    int width = imageSize.width;\n    //图像高度\n    int height = imageSize.height;\n    //宽*高\n    int w_x_h = width * height;\n    //yuv数据长度 = (宽 * 高) * 3 / 2\n    int yuv_len = w_x_h * 3 / 2;\n    \n    //yuv数据\n    uint8_t *yuv_bytes = malloc(yuv_len);\n    \n    //ARGBToNV12这个函数是libyuv这个第三方库提供的一个将bgra图片转为yuv420格式的一个函数。\n    //libyuv是google提供的高性能的图片转码操作。支持大量关于图片的各种高效操作，是视频推流不可缺少的重要组件，你值得拥有。\n    [self lockFramebufferForReading];\n    ARGBToNV12(self.rawBytesForImage, width * 4, yuv_bytes, width, yuv_bytes + w_x_h, width, width, height);\n    [self unlockFramebufferAfterReading];\n    \n    NSData *yuvData = [NSData dataWithBytesNoCopy:yuv_bytes length:yuv_len];\n    \n    [self.capture sendVideoYuvData:yuvData];\n}\n\n\n")])])]),a("p",[e._v("从CMSampleBufferRef中提取PCM数据")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// AWAudioEncoder.m 文件\n-(NSData *) convertAudioSmapleBufferToPcmData:(CMSampleBufferRef) audioSample{\n    //获取pcm数据大小\n    NSInteger audioDataSize = CMSampleBufferGetTotalSampleSize(audioSample);\n    \n    //分配空间\n    int8_t *audio_data = aw_alloc((int32_t)audioDataSize);\n    \n    //获取CMBlockBufferRef\n    //这个结构里面就保存了 PCM数据\n    CMBlockBufferRef dataBuffer = CMSampleBufferGetDataBuffer(audioSample);\n    //直接将数据copy至我们自己分配的内存中\n    CMBlockBufferCopyDataBytes(dataBuffer, 0, audioDataSize, audio_data);\n    \n    //返回数据\n    return [NSData dataWithBytesNoCopy:audio_data length:audioDataSize];\n}\n\n\n")])])])])}),[],!1,null,null,null);n.default=u.exports}}]);