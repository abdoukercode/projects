app.factory("PostFactory",function ($http,$timeout){

    return {

        getPosts: function (){
           
            
            return $http({
                method: 'GET',
                url: './data.json'
            })
           
        },
        getPost: function(id, posts) {
            var post = {};
               angular.forEach(posts, function(value, key) {
                    if (value.id == id) {
                    post = value;
                      
                    }
                  }); 
            return post;
                
            }

            

        ,
        name: "Abdou"
    }
} );
