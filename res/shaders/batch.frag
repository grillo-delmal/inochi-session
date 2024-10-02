#version 330
in vec2 texUVs;
in vec4 exColor;
layout(location = 0) out vec4 outAlbedo;
layout(location = 1) out vec4 outEmission;
layout(location = 2) out vec4 outBump;

uniform sampler2D tex;

void main() {
    vec2 texSize = vec2(textureSize(tex, 0));
    outAlbedo = texture(tex, texUVs/texSize) * exColor;
    outEmission = texture(tex, texUVs/texSize) * 0.5;
    outBump = vec4(0.5, 0.5, 1, 1);
}