<template>
    <div class="upload-image-container">

        <div class="Image-input">

            <div class="Image-input__input-wrapper">
                <v-icon class="image-clear" @click="clearImage" color="red" v-if="image">mdi-close-box</v-icon>
                <div class="Image-input__image-wrapper">
                    <v-icon v-show="!getPathImage" size="100">
                        mdi-image-plus
                    </v-icon>

                    <img v-show="getPathImage" class="Image-input__image" :src="getPathImage">
                </div>
                <input
                    class="Image-input__input"
                    multiple
                    size="10485"
                    accept=".jpeg,.jpg"
                    name="thumbnail"
                    type="file"
                    @change="previewThumbnail"
                >
            </div>
        </div>
        {{this.imagePath}}
    </div>
</template>

<script>
export default {
    name: "AppImageUploadComponent",
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
        value: File,
        imagePath: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            image: '',
            file: [],
        }
    },

    computed: {
      getPathImage() {
          if (this.image) {
              return this.image;
          }
          return this.imagePath
      }
    },

    methods: {
        previewThumbnail (event) {
            const input = event.target
            if (input.files && input.files[0]) {
                this.file = input.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.image = event.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },

        clearImage() {
            this.image = ''
        }
    },

    watch: {
        file(val) {
            this.$emit('change', val)
        }
    },
}
</script>

<style scoped>
.upload-image-container {
    display: flex;
}
.span-title{
    margin-left: 10px;
    margin-top: 35px;
}
.Image-input {
    display: flex;
    width: 100px;
    border: 2px solid #4a5568;
    border-radius: 11px;
}
.Image-input__image-wrapper {
    flex-basis: auto;
    height: auto;
    background: #eee;
    justify-content: center;
    align-items: center;
    display: flex;
}
.Image-input__image-wrapper {
    color: #ccc;
    font-size: 999px;
    cursor: default;
}
.Image-input__image {
    border-radius: 1px;
    background-size: cover;
    width: 100%;
    height: auto;
}
.Image-input__input-wrapper {
    overflow: hidden;
    position: relative;
    background: #eee;
    border-radius: 10px;
    float: left;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0,0,0,0.2);
    transition: 0.4s background;
    width: auto;
}
.Image-input__input-wrapper:hover {
    background: #e0e0e0;
}
.Image-input__input {
    display: block;
    font-size: 200px;
    min-height: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    cursor: pointer;
}
.image-clear{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
}
</style>
