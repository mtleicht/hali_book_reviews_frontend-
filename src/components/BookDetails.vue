<template>
    <div class="container shadow-sm">
        {{ bookName }}
        <br>
        {{ bookAuthor }}
        <br>
        {{ bookReview }}
        <br>
        {{ id }}

    </div>
</template>

<script>
    export default {
        name: 'BookDetails',
        data() {
            return {
                bookName:null,
                bookAuthor:null,
                bookReview:null,
                id:null
            };
        },
        methods:{
            getBookReviewData(id){
                this.id = id;
                this.bookReview = "This is the content of the book review";
                this.bookAuthor = "Charlie Kirk",
                this.bookName = "The College Scam";
                
            }
        },
        mounted(){
            this.getBookReviewData(this.$route.params.id);
        }
    }
</script>



<style scoped>
  div {
    font-size:30px;
    margin-bottom: 20px;
    width: 100%;
    min-height: 40px;    
  }

  .container{
    background:white;
  }

  ul > li{
    list-style:none;
    padding-left: 30px;
  }

</style>

