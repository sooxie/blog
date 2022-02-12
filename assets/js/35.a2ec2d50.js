(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{433:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"avframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avframe"}},[e._v("#")]),e._v(" AVFrame")]),e._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),a("p",[e._v("这个结构描述解码(原始)音频或视频数据。")]),e._v(" "),a("p",[e._v("AVFrame结构体一般用于存储原始数据（即非压缩数据，例如对视频来说是YUV，RGB，对音频来说是PCM），此外还包含了一些相关的信息。比如说，解码的时候存储了宏块类型表，QP表，运动矢量表等数据。编码的时候也存储了相关的数据")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("av_frame_alloc()\nAVFrame必须使用av_frame_alloc()来分配。注意，这仅仅是分配AVFrame本身，数据的缓冲区必须被管理\n*透过其他途径(见下文)")])]),e._v(" "),a("li",[a("p",[e._v("av_frame_free()\nAVFrame必须通过av_frame_free()释放")])]),e._v(" "),a("li",[a("p",[e._v("AVFrame通常被分配一次，然后重复使用多次来保存不同的数据(例如，一个单独的AVFrame保存从解码器接收到的帧)。在这种情况下，av_frame_unref()将释放帧持有的所有引用，并在再次重用之前将其重置为原始的干净状态。")])]),e._v(" "),a("li",[a("p",[e._v("AVFrame描述的数据通常通过AVBuffer API进行引用计数。底层缓冲区引用存储在AVFrame.buf /AVFrame.extended_buf。一个AVFrame被认为是引用计数，如果至少有一个引用被设置，即AVFrame.buf[0] != NULL。在这种情况下，每个数据平面必须包含在AVFrame的一个AVFrame.buf或AVFrame.extended_buf。所有数据可以有一个单独的缓冲区，或者每个平面有一个单独的缓冲区，或者两者之间的任何东西。")])]),e._v(" "),a("li",[a("p",[e._v("sizeof(AVFrame)不是公共ABI的一部分，所以新的字段可能会添加到末尾，并有一个小的凸起。")])]),e._v(" "),a("li",[a("p",[e._v("字段可以通过AVOptions访问，使用的名称字符串，匹配C结构字段名通过AVOptions访问的字段。AVFrame的AVClass可以从avcodec_get_frame_class()中获取")])])]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("typedef")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AVFrame")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("AV_NUM_DATA_POINTERS")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")])])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * pointer to the picture/channel planes.\n     * This might be different from the first allocated byte\n     *\n     * Some decoders access areas outside 0,0 - width,height, please\n     * see avcodec_align_dimensions2(). Some filters and swscale can read\n     * up to 16 bytes beyond the planes, if these filters are to be used,\n     * then 16 extra bytes must be allocated.\n     *\n     * NOTE: Except for hwaccel formats, pointers not needed by the format\n     * MUST be set to NULL.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint8_t")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("AV_NUM_DATA_POINTERS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * For video, size in bytes of each picture line.\n     * For audio, size in bytes of each plane.\n     *\n     * For audio, only linesize[0] may be set. For planar audio, each channel\n     * plane must be the same size.\n     *\n     * For video the linesizes should be multiples of the CPUs alignment\n     * preference, this is 16 or 32 for modern desktop CPUs.\n     * Some code requires such alignment other code can be slower without\n     * correct alignment, for yet other it makes no difference.\n     *\n     * @note The linesize may be larger than the size of usable data -- there\n     * may be extra padding present for performance reasons.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" linesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("AV_NUM_DATA_POINTERS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * pointers to the data planes/channels.\n     *\n     * For video, this should simply point to data[].\n     *\n     * For planar audio, each channel has a separate data pointer, and\n     * linesize[0] contains the size of each channel buffer.\n     * For packed audio, there is just one data pointer, and linesize[0]\n     * contains the total size of the buffer for all channels.\n     *\n     * Note: Both data and extended_data should always be set in a valid frame,\n     * but for planar audio with more channels that can fit in data,\n     * extended_data must be used in order to access all channels.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint8_t")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("extended_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/**\n     * @name Video dimensions\n     * Video frames only. The coded dimensions (in pixels) of the video frame,\n     * i.e. the size of the rectangle that contains some well-defined values.\n     *\n     * @note The part of the frame intended for display/presentation is further\n     * restricted by the @ref cropping "Cropping rectangle".\n     * @{\n     */')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @}\n     */")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * number of audio samples (per channel) described by this frame\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" nb_samples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * format of the frame, -1 if unknown or unset\n     * Values correspond to enum AVPixelFormat for video frames,\n     * enum AVSampleFormat for audio)\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * 1 -> keyframe, 0-> not\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" key_frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Picture type of the frame.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AVPictureType")]),e._v(" pict_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Sample aspect ratio for the video frame, 0/1 if unknown/unspecified.\n     */")]),e._v("\n    AVRational sample_aspect_ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Presentation timestamp in time_base units (time when frame should be shown to user).\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("int64_t")]),e._v(" pts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[e._v("FF_API_PKT_PTS")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * PTS copied from the AVPacket that was decoded to produce this frame.\n     * @deprecated use the pts field instead\n     */")]),e._v("\n    attribute_deprecated\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("int64_t")]),e._v(" pkt_pts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("endif")])]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * DTS copied from the AVPacket that triggered returning this frame. (if frame threading isn't used)\n     * This is also the Presentation time of this AVFrame calculated from\n     * only AVPacket.dts values without pts values.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("int64_t")]),e._v(" pkt_dts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * picture number in bitstream order\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" coded_picture_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * picture number in display order\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" display_picture_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * quality (between 1 (good) and FF_LAMBDA_MAX (bad))\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" quality"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * for some private data of the user\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("opaque"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[e._v("FF_API_ERROR_FRAME")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @deprecated unused\n     */")]),e._v("\n    attribute_deprecated\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint64_t")]),e._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("AV_NUM_DATA_POINTERS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("endif")])]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * When decoding, this signals how much the picture must be delayed.\n     * extra_delay = repeat_pict / (2*fps)\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" repeat_pict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * The content of the picture is interlaced.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" interlaced_frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * If the content is interlaced, is top field displayed first.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" top_field_first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Tell user application that palette has changed from previous frame.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" palette_has_changed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * reordered opaque 64 bits (generally an integer or a double precision float\n     * PTS but can be anything).\n     * The user sets AVCodecContext.reordered_opaque to represent the input at\n     * that time,\n     * the decoder reorders values as needed and sets AVFrame.reordered_opaque\n     * to exactly one of the values provided by the user through AVCodecContext.reordered_opaque\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("int64_t")]),e._v(" reordered_opaque"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Sample rate of the audio data.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" sample_rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Channel layout of the audio data.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint64_t")]),e._v(" channel_layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * AVBuffer references backing the data for this frame. If all elements of\n     * this array are NULL, then this frame is not reference counted. This array\n     * must be filled contiguously -- if buf[i] is non-NULL then buf[j] must\n     * also be non-NULL for all j < i.\n     *\n     * There may be at most one AVBuffer per data plane, so for video this array\n     * always contains all the references. For planar audio with more than\n     * AV_NUM_DATA_POINTERS channels, there may be more buffers than can fit in\n     * this array. Then the extra AVBufferRef pointers are stored in the\n     * extended_buf array.\n     */")]),e._v("\n    AVBufferRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("AV_NUM_DATA_POINTERS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * For planar audio which requires more than AV_NUM_DATA_POINTERS\n     * AVBufferRef pointers, this array will hold all the references which\n     * cannot fit into AVFrame.buf.\n     *\n     * Note that this is different from AVFrame.extended_data, which always\n     * contains all the pointers. This array only contains the extra pointers,\n     * which cannot fit into AVFrame.buf.\n     *\n     * This array is always allocated using av_malloc() by whoever constructs\n     * the frame. It is freed in av_frame_unref().\n     */")]),e._v("\n    AVBufferRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("extended_buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Number of elements in extended_buf.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v("        nb_extended_buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    AVFrameSideData "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("side_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v("            nb_side_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * @defgroup lavu_frame_flags AV_FRAME_FLAGS\n * @ingroup lavu_frame\n * Flags describing additional frame properties.\n *\n * @{\n */")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * The frame data may be corrupted, e.g. due to decoding errors.\n */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("AV_FRAME_FLAG_CORRUPT")]),e._v("       "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * A flag to mark the frames which need to be decoded, but shouldn't be output.\n */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("AV_FRAME_FLAG_DISCARD")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * @}\n */")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Frame flags, a combination of @ref lavu_frame_flags\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * MPEG vs JPEG YUV range.\n     * - encoding: Set by user\n     * - decoding: Set by libavcodec\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AVColorRange")]),e._v(" color_range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AVColorPrimaries")]),e._v(" color_primaries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AVColorTransferCharacteristic")]),e._v(" color_trc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * YUV colorspace type.\n     * - encoding: Set by user\n     * - decoding: Set by libavcodec\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AVColorSpace")]),e._v(" colorspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AVChromaLocation")]),e._v(" chroma_location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * frame timestamp estimated using various heuristics, in stream time base\n     * - encoding: unused\n     * - decoding: set by libavcodec, read by user.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("int64_t")]),e._v(" best_effort_timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * reordered pos from the last AVPacket that has been input into the decoder\n     * - encoding: unused\n     * - decoding: Read by user.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("int64_t")]),e._v(" pkt_pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * duration of the corresponding packet, expressed in\n     * AVStream->time_base units, 0 if unknown.\n     * - encoding: unused\n     * - decoding: Read by user.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("int64_t")]),e._v(" pkt_duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * metadata.\n     * - encoding: Set by user.\n     * - decoding: Set by libavcodec.\n     */")]),e._v("\n    AVDictionary "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * decode error flags of the frame, set to a combination of\n     * FF_DECODE_ERROR_xxx flags if the decoder produced a frame, but there\n     * were errors during the decoding.\n     * - encoding: unused\n     * - decoding: set by libavcodec, read by user.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" decode_error_flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("FF_DECODE_ERROR_INVALID_BITSTREAM")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("FF_DECODE_ERROR_MISSING_REFERENCE")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("FF_DECODE_ERROR_CONCEALMENT_ACTIVE")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("FF_DECODE_ERROR_DECODE_SLICES")]),e._v("       "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")])])]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * number of audio channels, only used for audio.\n     * - encoding: unused\n     * - decoding: Read by user.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" channels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * size of the corresponding packet containing the compressed\n     * frame.\n     * It is set to a negative value if unknown.\n     * - encoding: unused\n     * - decoding: set by libavcodec, read by user.\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" pkt_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[e._v("FF_API_FRAME_QP")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * QP table\n     */")]),e._v("\n    attribute_deprecated\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("int8_t")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("qscale_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * QP store stride\n     */")]),e._v("\n    attribute_deprecated\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" qstride"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    attribute_deprecated\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" qscale_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    attribute_deprecated\n    AVBufferRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("qp_table_buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("endif")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * For hwaccel-format frames, this should be a reference to the\n     * AVHWFramesContext describing the frame.\n     */")]),e._v("\n    AVBufferRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("hw_frames_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * AVBufferRef for free use by the API user. FFmpeg will never check the\n     * contents of the buffer ref. FFmpeg calls av_buffer_unref() on it when\n     * the frame is unreferenced. av_frame_copy_props() calls create a new\n     * reference with av_buffer_ref() for the target frame's opaque_ref field.\n     *\n     * This is unrelated to the opaque field, although it serves a similar\n     * purpose.\n     */")]),e._v("\n    AVBufferRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("opaque_ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @anchor cropping\n     * @name Cropping\n     * Video frames only. The number of pixels to discard from the the\n     * top/bottom/left/right border of the frame to obtain the sub-rectangle of\n     * the frame intended for presentation.\n     * @{\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("size_t")]),e._v(" crop_top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("size_t")]),e._v(" crop_bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("size_t")]),e._v(" crop_left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("size_t")]),e._v(" crop_right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @}\n     */")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * AVBufferRef for internal use by a single libav* library.\n     * Must not be used to transfer data between libraries.\n     * Has to be NULL when ownership of the frame leaves the respective library.\n     *\n     * Code outside the FFmpeg libs should never check or change the contents of the buffer ref.\n     *\n     * FFmpeg calls av_buffer_unref() on it when the frame is unreferenced.\n     * av_frame_copy_props() calls create a new reference with av_buffer_ref()\n     * for the target frame's private_ref field.\n     */")]),e._v("\n    AVBufferRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("private_ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" AVFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n\n")])])]),a("h2",{attrs:{id:"重要变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要变量"}},[e._v("#")]),e._v(" 重要变量")]),e._v(" "),a("h3",{attrs:{id:"uint8-t-data-av-num-data-pointers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uint8-t-data-av-num-data-pointers"}},[e._v("#")]),e._v(" uint8_t *data[AV_NUM_DATA_POINTERS]")]),e._v(" "),a("p",[e._v("存储解码后原始数据 ,YUV、RGB、PCM")]),e._v(" "),a("ul",[a("li",[e._v("packed格式数据,存到data[0]里面")]),e._v(" "),a("li",[e._v("planar格式数据,会分开成data[0]，data[1]，data[2]...。YUV420P中data[0]存Y，data[1]存U，data[2]存V）")])]),e._v(" "),a("h3",{attrs:{id:"int-linesize-av-num-data-pointers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-linesize-av-num-data-pointers"}},[e._v("#")]),e._v(" int linesize[AV_NUM_DATA_POINTERS]")]),e._v(" "),a("p",[e._v("注意：未必等于图像的宽，一般大于图像的宽")]),e._v(" "),a("ul",[a("li",[e._v("对于视频，大小在字节的每个图片行。")]),e._v(" "),a("li",[e._v("对于音频，大小为每个平面的字节。")])]),e._v(" "),a("h3",{attrs:{id:"int-width-height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-width-height"}},[e._v("#")]),e._v(" int width, height;")]),e._v(" "),a("p",[e._v("视频帧宽高")]),e._v(" "),a("h3",{attrs:{id:"int-nb-samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-nb-samples"}},[e._v("#")]),e._v(" int nb_samples;")]),e._v(" "),a("p",[e._v("此帧所描述的音频采样数(每通道),一个AVFrame中可能包含多个音频帧")]),e._v(" "),a("h3",{attrs:{id:"int-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-format"}},[e._v("#")]),e._v(" int format;")]),e._v(" "),a("ul",[a("li",[e._v("format of the frame, -1 if unknown or unset Values correspond to enum AVPixelFormat for video frames,enum AVSampleFormat for audio)")]),e._v(" "),a("li",[e._v("音视频的格式，枚举类型AVPixelFormat，AVSampleFormat")])]),e._v(" "),a("h3",{attrs:{id:"int-key-frame"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-key-frame"}},[e._v("#")]),e._v(" int key_frame;")]),e._v(" "),a("ul",[a("li",[e._v("1 -> keyframe, 0-> not")]),e._v(" "),a("li",[e._v("是否为关键帧")])]),e._v(" "),a("h3",{attrs:{id:"enum-avpicturetype-pict-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enum-avpicturetype-pict-type"}},[e._v("#")]),e._v(" enum AVPictureType pict_type;")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Picture type of the frame.")])]),e._v(" "),a("li",[a("p",[e._v("帧类型，I、P、B")])])]),e._v(" "),a("h3",{attrs:{id:"avrational-sample-aspect-ratio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avrational-sample-aspect-ratio"}},[e._v("#")]),e._v(" AVRational sample_aspect_ratio;")]),e._v(" "),a("ul",[a("li",[e._v("Sample aspect ratio for the video frame, 0/1 if unknown/unspecified.")]),e._v(" "),a("li",[e._v("视频帧的样例宽高比，0/1(未知/未指定)。")])]),e._v(" "),a("h3",{attrs:{id:"int64-t-pts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int64-t-pts"}},[e._v("#")]),e._v(" int64_t pts;")]),e._v(" "),a("ul",[a("li",[e._v("Presentation timestamp in time_base units (time when frame should be shown to user).")]),e._v(" "),a("li",[e._v("帧显示的时间")])]),e._v(" "),a("h3",{attrs:{id:"int64-t-pkt-dts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int64-t-pkt-dts"}},[e._v("#")]),e._v(" int64_t pkt_dts;")]),e._v(" "),a("ul",[a("li",[e._v("DTS copied from the AVPacket that triggered returning this frame. (if frame threading isn't used) . This is also the Presentation time of this AVFrame calculated fromonly AVPacket.dts values without pts values.")]),e._v(" "),a("li",[e._v("从触发返回帧的AVPacket复制的DTS。(如果框架线程没有被使用)。这也是由AVPacket计算出的AVFrame的表示时间。没有PTS值的DTS值。")])]),e._v(" "),a("h3",{attrs:{id:"int-coded-picture-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-coded-picture-number"}},[e._v("#")]),e._v(" int coded_picture_number;")]),e._v(" "),a("ul",[a("li",[e._v("picture number in bitstream order")]),e._v(" "),a("li",[e._v("编码帧序号")])]),e._v(" "),a("h3",{attrs:{id:"int-display-picture-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-display-picture-number"}},[e._v("#")]),e._v(" int display_picture_number;")]),e._v(" "),a("ul",[a("li",[e._v("picture number in display order")]),e._v(" "),a("li",[e._v("显示帧序号")])]),e._v(" "),a("h3",{attrs:{id:"int-sample-rate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-sample-rate"}},[e._v("#")]),e._v(" int sample_rate;")]),e._v(" "),a("ul",[a("li",[e._v("Sample rate of the audio data.")]),e._v(" "),a("li",[e._v("音频采样率")])]),e._v(" "),a("h3",{attrs:{id:"uint64-t-channel-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uint64-t-channel-layout"}},[e._v("#")]),e._v(" uint64_t channel_layout;")]),e._v(" "),a("ul",[a("li",[e._v("Channel layout of the audio data.")]),e._v(" "),a("li",[e._v("音频数据的声道布局。 AV_CH_LAYOUT_STEREO")])]),e._v(" "),a("h3",{attrs:{id:"avbufferref-buf-av-num-data-pointers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avbufferref-buf-av-num-data-pointers"}},[e._v("#")]),e._v(" AVBufferRef *buf[AV_NUM_DATA_POINTERS];")]),e._v(" "),a("h3",{attrs:{id:"int-channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-channels"}},[e._v("#")]),e._v(" int channels;")]),e._v(" "),a("p",[e._v("number of audio channels, only used for audio.  encoding: unused; decoding: Read by user.")]),e._v(" "),a("ul",[a("li",[e._v("音频通道数，仅用于音频")])]),e._v(" "),a("h3",{attrs:{id:"int-pkt-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-pkt-size"}},[e._v("#")]),e._v(" int pkt_size;")]),e._v(" "),a("ul",[a("li",[e._v("size of the corresponding packet containing the compressed frame. It is set to a negative value if unknown. "),a("strong",[e._v("encoding: unused")]),e._v("; "),a("strong",[e._v("decoding: set by libavcodec, read by user.")])]),e._v(" "),a("li",[e._v("帧大小")])])])}),[],!1,null,null,null);t.default=s.exports}}]);