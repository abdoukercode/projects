app.controller("PostsCntrl", function(PostFactory, $scope, $timeout) {
    $scope.loading = true;
    $timeout(function(){
 PostFactory.getPosts().then(value => {$scope.posts= value.data; $scope.loading = false;});

    }, 1000)
});

app.controller("commentsCtrl", function(PostFactory, $routeParams,$scope) {
 posts = [
    {
      "id": 0,
      "name": "Comtext",
      "content": "Adipisicing do nostrud tempor enim velit excepteur anim minim proident amet cupidatat excepteur. Elit aliquip pariatur nostrud in sunt. Velit Lorem adipisicing ex proident pariatur. Qui non aliquip sit deserunt nisi et eiusmod. Nulla incididunt proident aute id ullamco nostrud mollit aliquip pariatur ea. In dolore do enim dolore in quis qui labore est et Lorem mollit.",
      "comments": [
        {
          "username": "Castro",
          "name": {
            "first": "Linda",
            "last": "Kline"
          },
          "company": "COLUMELLA",
          "city": "Linwood",
          "email": "linda.kline@columella.biz",
          "content": "Adipisicing non fugiat nulla elit do eu voluptate. Duis nostrud exercitation occaecat irure enim. Eiusmod aute cupidatat magna consequat tempor. In incididunt enim consequat reprehenderit. Duis cupidatat laboris ullamco ipsum amet occaecat ullamco."
        },
        {
          "username": "Travis",
          "name": {
            "first": "Lynne",
            "last": "Fletcher"
          },
          "company": "EQUICOM",
          "city": "Verdi",
          "email": "lynne.fletcher@equicom.biz",
          "content": "Quis cupidatat esse eiusmod ut ut laborum ex enim laboris. Aliqua et ipsum est anim laboris. Consectetur tempor Lorem elit enim deserunt sint Lorem in culpa. Deserunt laborum anim ut et nulla nostrud dolore laborum duis commodo adipisicing veniam sint non. Dolore id in culpa aliquip incididunt amet deserunt ex tempor proident veniam."
        },
        {
          "username": "Nora",
          "name": {
            "first": "Pate",
            "last": "Becker"
          },
          "company": "VISUALIX",
          "city": "Ballico",
          "email": "pate.becker@visualix.org",
          "content": "Aliqua sint sint excepteur in culpa pariatur sint. Anim Lorem culpa culpa ipsum elit ad cillum quis esse veniam quis est esse. Elit officia minim aliquip veniam nulla id reprehenderit consequat eu cillum dolor. Id officia incididunt pariatur mollit irure minim culpa labore. Labore eiusmod voluptate nostrud nisi eiusmod voluptate laboris."
        },
        {
          "username": "Roxie",
          "name": {
            "first": "Branch",
            "last": "Rios"
          },
          "company": "REMOTION",
          "city": "Camptown",
          "email": "branch.rios@remotion.io",
          "content": "Commodo duis esse quis aute aliqua. Labore eiusmod deserunt elit eiusmod ex aute qui fugiat in dolor sit minim cillum. Incididunt est consequat et irure do ullamco dolore eiusmod velit exercitation ex amet. Nostrud irure culpa consequat sunt et laboris tempor. Officia elit magna do veniam adipisicing mollit adipisicing cillum culpa nulla tempor labore."
        },
        {
          "username": "Meyers",
          "name": {
            "first": "Kline",
            "last": "Kramer"
          },
          "company": "TYPHONICA",
          "city": "Frank",
          "email": "kline.kramer@typhonica.com",
          "content": "Veniam mollit ullamco cupidatat ut occaecat exercitation velit consectetur laboris officia nulla adipisicing. Excepteur dolor do ad dolore aliqua ipsum quis veniam deserunt qui eu. Pariatur labore occaecat nisi fugiat pariatur est do tempor tempor laborum aliqua exercitation minim. Et est minim sit excepteur cillum voluptate excepteur ad labore irure non fugiat consectetur. Sunt ullamco dolore aliquip consequat."
        },
        {
          "username": "Amalia",
          "name": {
            "first": "Hughes",
            "last": "Roy"
          },
          "company": "PLASTO",
          "city": "Hampstead",
          "email": "hughes.roy@plasto.ca",
          "content": "Incididunt amet proident aliqua fugiat commodo incididunt veniam. Consequat dolore culpa officia id velit nulla nulla duis sit consectetur. Veniam commodo adipisicing aliqua laborum commodo proident voluptate est. In tempor sit nulla et ut anim aliqua deserunt voluptate eu veniam dolor deserunt do. Aliquip pariatur commodo consequat labore occaecat velit."
        }
      ]
    },
    {
      "id": 1,
      "name": "Dreamia",
      "content": "Elit ipsum proident qui consectetur occaecat deserunt pariatur occaecat dolore commodo elit commodo amet cupidatat. Voluptate qui ipsum ullamco anim. Cillum veniam ullamco cillum anim nostrud aute ex velit laborum. In id ut tempor Lorem adipisicing. Ex eu culpa veniam cillum. Ut fugiat ad dolor Lorem.",
      "comments": [
        {
          "username": "Wyatt",
          "name": {
            "first": "Ratliff",
            "last": "Wilcox"
          },
          "company": "BITREX",
          "city": "Belleview",
          "email": "ratliff.wilcox@bitrex.net",
          "content": "Enim adipisicing pariatur non anim minim minim pariatur anim sint aute proident veniam excepteur dolore. Elit nulla sunt tempor ad et eu. Officia laborum cupidatat eu ea. Tempor mollit dolore deserunt do voluptate laborum id non non mollit. Consectetur labore irure aliquip anim reprehenderit velit adipisicing aliqua et."
        },
        {
          "username": "Carlene",
          "name": {
            "first": "Foreman",
            "last": "Carrillo"
          },
          "company": "CANOPOLY",
          "city": "Bannock",
          "email": "foreman.carrillo@canopoly.co.uk",
          "content": "Commodo laborum enim velit pariatur ex tempor ut occaecat voluptate sunt eu ut ut incididunt. Esse ea aute do excepteur incididunt consequat Lorem minim aliqua fugiat. Anim deserunt Lorem ad consectetur. Cupidatat ullamco mollit eiusmod aliquip enim eiusmod officia Lorem adipisicing ea proident anim pariatur. Do laborum laborum proident qui laboris ad esse labore incididunt quis et id eu mollit."
        },
        {
          "username": "Montoya",
          "name": {
            "first": "Kaye",
            "last": "Love"
          },
          "company": "PODUNK",
          "city": "Iberia",
          "email": "kaye.love@podunk.info",
          "content": "Nisi voluptate tempor nisi esse ullamco nulla cupidatat esse dolor do. Aute dolor sunt tempor tempor esse officia tempor id minim dolore. Nostrud proident sint deserunt fugiat exercitation Lorem duis esse. Sit quis aute mollit labore id sit sunt sunt proident nisi minim eiusmod labore. Officia tempor ipsum mollit excepteur minim duis."
        },
        {
          "username": "Frost",
          "name": {
            "first": "Brennan",
            "last": "Mosley"
          },
          "company": "NSPIRE",
          "city": "Jessie",
          "email": "brennan.mosley@nspire.me",
          "content": "Enim anim culpa occaecat velit cupidatat pariatur fugiat magna velit culpa duis commodo aute. Sit aute do laboris adipisicing. Exercitation non pariatur incididunt cupidatat id. Duis ut proident ad non culpa pariatur non culpa magna ut. Nulla consectetur laboris labore officia dolore."
        },
        {
          "username": "Richmond",
          "name": {
            "first": "Potter",
            "last": "Daniels"
          },
          "company": "KEGULAR",
          "city": "Fairhaven",
          "email": "potter.daniels@kegular.name",
          "content": "Sit velit excepteur pariatur sunt do anim. Voluptate ex ex duis consectetur laborum ullamco. Labore dolore do in culpa aliquip mollit occaecat. Duis sunt id aliquip laborum. Voluptate sit exercitation irure occaecat est in duis pariatur enim cupidatat commodo nulla dolore consequat."
        }
      ]
    },
    {
      "id": 2,
      "name": "Waab",
      "content": "Esse consectetur laborum laboris ea. Reprehenderit do reprehenderit ea aliqua aliqua dolore non proident anim qui amet pariatur sit exercitation. Labore aliquip ipsum ipsum cupidatat consectetur culpa aute labore. Est enim est laborum et commodo aliquip adipisicing consequat elit labore. Nostrud eiusmod ea pariatur aliqua occaecat cillum ad duis elit culpa ullamco. Laborum magna nostrud id aliqua mollit cupidatat minim incididunt nostrud commodo et nisi.",
      "comments": [
        {
          "username": "Robin",
          "name": {
            "first": "Pat",
            "last": "Walters"
          },
          "company": "GADTRON",
          "city": "Welda",
          "email": "pat.walters@gadtron.tv",
          "content": "Reprehenderit commodo anim excepteur pariatur non veniam officia eiusmod qui pariatur non eiusmod veniam. Ullamco dolor eiusmod aliquip voluptate ullamco sint anim. Qui ipsum mollit eiusmod et in incididunt veniam laboris amet ea sint. Consectetur sint in excepteur non dolor culpa tempor ullamco in cupidatat mollit. Pariatur consequat nulla sunt reprehenderit."
        },
        {
          "username": "Arline",
          "name": {
            "first": "Valarie",
            "last": "Velasquez"
          },
          "company": "TALAE",
          "city": "Chelsea",
          "email": "valarie.velasquez@talae.biz",
          "content": "Cillum id dolor voluptate culpa sit commodo tempor adipisicing ad et. Consectetur ipsum incididunt anim amet cillum Lorem minim sunt commodo pariatur excepteur ut commodo. Nulla et qui sit est dolor laborum eiusmod. Minim excepteur irure laboris excepteur non. Do eiusmod occaecat laborum cupidatat."
        },
        {
          "username": "Alexis",
          "name": {
            "first": "Mayo",
            "last": "Sanchez"
          },
          "company": "ZAGGLE",
          "city": "Cannondale",
          "email": "mayo.sanchez@zaggle.biz",
          "content": "Pariatur non voluptate ad eiusmod pariatur veniam. Aliqua culpa reprehenderit ex esse ad deserunt commodo quis nisi magna ad aliquip est. Laborum cupidatat culpa qui amet. Et excepteur magna esse laboris. Voluptate veniam est eiusmod consectetur ex aute ea do."
        },
        {
          "username": "Rebecca",
          "name": {
            "first": "Clare",
            "last": "Conway"
          },
          "company": "VINCH",
          "city": "Saranap",
          "email": "clare.conway@vinch.org",
          "content": "Minim minim magna consectetur consequat. Mollit qui est exercitation aute sint dolor enim. Deserunt amet nostrud tempor Lorem sunt. Veniam cupidatat aliquip ullamco voluptate consequat. Ullamco veniam ipsum enim veniam officia fugiat mollit ullamco Lorem nisi."
        },
        {
          "username": "Robles",
          "name": {
            "first": "Clarke",
            "last": "Lambert"
          },
          "company": "TROPOLI",
          "city": "Websterville",
          "email": "clarke.lambert@tropoli.io",
          "content": "Esse dolore duis enim pariatur sit nulla dolore minim sit consectetur enim exercitation do. Non sunt est ex duis tempor. Nisi quis dolore dolore elit enim Lorem laboris labore. Eiusmod tempor amet aute sit ad nulla esse. Est ad nostrud excepteur esse incididunt nulla excepteur cupidatat reprehenderit aliqua voluptate."
        }
      ]
    },
    {
      "id": 3,
      "name": "Coash",
      "content": "Eu amet quis occaecat eiusmod nisi occaecat esse dolore consectetur deserunt et fugiat quis consequat. Et velit irure et anim amet deserunt culpa eu ex aliqua. Velit id ex nulla qui magna nostrud fugiat tempor eiusmod. Ipsum aliqua incididunt ea nulla est ad. Ipsum ad excepteur dolor labore velit laborum dolor veniam reprehenderit. Consectetur non quis dolore anim aute minim id laborum eiusmod excepteur.",
      "comments": [
        {
          "username": "Donaldson",
          "name": {
            "first": "Benita",
            "last": "Alvarez"
          },
          "company": "GENMY",
          "city": "Harviell",
          "email": "benita.alvarez@genmy.com",
          "content": "Id commodo enim ipsum proident ullamco amet veniam ad eu quis dolor sit pariatur. Irure sint et eiusmod mollit. Do officia veniam tempor laborum laborum ex ea id reprehenderit mollit aliqua qui enim cupidatat. Veniam ex consequat dolor consectetur consequat eiusmod eu. Dolore fugiat cupidatat do non dolor labore ut aute reprehenderit aliquip culpa reprehenderit amet qui."
        },
        {
          "username": "Sharron",
          "name": {
            "first": "Geneva",
            "last": "Short"
          },
          "company": "FIBRODYNE",
          "city": "Riviera",
          "email": "geneva.short@fibrodyne.ca",
          "content": "Mollit aute consequat voluptate ipsum. Ut incididunt laboris ut sint proident. In commodo irure excepteur qui anim consequat dolor aliquip consectetur eiusmod tempor aliquip. Voluptate tempor ea ipsum eu do laboris exercitation id culpa proident culpa enim amet esse. Et tempor officia duis aute dolore adipisicing."
        },
        {
          "username": "Hooper",
          "name": {
            "first": "Lynda",
            "last": "Perez"
          },
          "company": "DECRATEX",
          "city": "Camino",
          "email": "lynda.perez@decratex.net",
          "content": "Lorem qui sint pariatur commodo esse labore eu sint fugiat est et duis. Excepteur pariatur esse amet laboris nisi in Lorem fugiat esse. Sunt id adipisicing anim laboris fugiat eiusmod. Pariatur exercitation cupidatat cupidatat adipisicing. Culpa qui sunt incididunt deserunt laborum magna cupidatat."
        },
        {
          "username": "Neva",
          "name": {
            "first": "Jeri",
            "last": "Hunt"
          },
          "company": "XSPORTS",
          "city": "Dubois",
          "email": "jeri.hunt@xsports.co.uk",
          "content": "Ex exercitation laborum velit incididunt do veniam. Nostrud ea incididunt est enim ad sunt occaecat pariatur aute velit ut consequat proident. Aliqua ullamco proident sint nisi duis nisi ullamco ex est ex sint elit aliquip. Sunt deserunt sit dolore magna quis nulla. Esse proident exercitation cupidatat qui incididunt id aute nostrud deserunt ex sunt."
        },
        {
          "username": "Julie",
          "name": {
            "first": "Mckinney",
            "last": "Owen"
          },
          "company": "EMERGENT",
          "city": "Grapeview",
          "email": "mckinney.owen@emergent.info",
          "content": "Reprehenderit ut et reprehenderit velit laborum irure ex sunt. Id laborum officia dolor non ullamco ex ullamco et sint aute ipsum. Labore nostrud ut laborum culpa. Nostrud enim fugiat consequat minim ea ut eiusmod proident irure voluptate irure sint velit nulla. Deserunt velit ea ut pariatur ullamco labore deserunt."
        },
        {
          "username": "Charlotte",
          "name": {
            "first": "Eleanor",
            "last": "Pena"
          },
          "company": "ENOMEN",
          "city": "Orason",
          "email": "eleanor.pena@enomen.me",
          "content": "Commodo proident esse irure ea esse proident anim consequat dolor. Nulla ipsum pariatur fugiat mollit ad. Laborum elit pariatur incididunt tempor deserunt veniam qui esse incididunt adipisicing voluptate est est id. Excepteur consequat dolor consectetur magna cillum proident sunt irure qui. Aliquip dolore in esse mollit irure et sit anim adipisicing non."
        }
      ]
    },
    {
      "id": 4,
      "name": "Endipine",
      "content": "Et proident duis nisi reprehenderit quis ad. Veniam enim consequat sunt sint duis exercitation commodo sunt enim non eu laborum cupidatat. Anim labore ea in deserunt ex minim culpa non cupidatat ad cillum enim ullamco mollit. Aliquip dolore et magna cupidatat sit adipisicing proident tempor reprehenderit non reprehenderit. Sit consequat sit cillum minim non magna duis sit mollit laborum commodo velit. Incididunt duis laborum ea dolore ex laboris est aliquip eu sunt exercitation et.",
      "comments": [
        {
          "username": "Christine",
          "name": {
            "first": "Susie",
            "last": "Beck"
          },
          "company": "ZENTIA",
          "city": "Morgandale",
          "email": "susie.beck@zentia.name",
          "content": "Enim consequat fugiat sit et et enim reprehenderit officia anim ullamco sit laboris velit. Et sit eu magna cupidatat duis est cillum amet et aliquip sit id excepteur nostrud. Veniam ipsum aliqua commodo culpa nostrud. Cupidatat voluptate magna dolore nulla et laborum consectetur sunt ex. Eu laborum tempor eiusmod voluptate."
        },
        {
          "username": "Annabelle",
          "name": {
            "first": "Potts",
            "last": "Swanson"
          },
          "company": "KRAG",
          "city": "Caron",
          "email": "potts.swanson@krag.tv",
          "content": "Nulla ipsum excepteur magna aliqua elit et aliquip nostrud nostrud. Elit mollit excepteur ipsum ipsum laborum occaecat in incididunt sunt elit id culpa. Dolor in aliqua esse do veniam voluptate labore est qui. Labore anim ad minim consectetur nostrud. Irure occaecat commodo dolore dolor exercitation aliquip ex cupidatat anim qui."
        },
        {
          "username": "Carver",
          "name": {
            "first": "Butler",
            "last": "Whitfield"
          },
          "company": "BEDLAM",
          "city": "Tolu",
          "email": "butler.whitfield@bedlam.biz",
          "content": "Duis incididunt adipisicing minim sunt laborum magna veniam anim sunt incididunt est. Enim sit Lorem aliqua dolore sint sit ad reprehenderit. Eu laboris id irure amet incididunt eu tempor fugiat ad irure quis eu dolor dolore. Cillum sit nisi nulla esse sit in. Officia tempor quis proident esse nulla reprehenderit reprehenderit irure ipsum in mollit."
        },
        {
          "username": "Sabrina",
          "name": {
            "first": "Cardenas",
            "last": "Mercado"
          },
          "company": "MIRACLIS",
          "city": "Nutrioso",
          "email": "cardenas.mercado@miraclis.biz",
          "content": "Minim tempor nisi laborum enim ut veniam ut. Consequat minim anim consectetur nisi culpa reprehenderit ullamco ipsum anim fugiat dolor nisi ipsum. Nisi magna sit et labore eiusmod sunt aliqua reprehenderit sunt. Irure adipisicing cupidatat irure aute. Exercitation dolor deserunt est velit cillum laborum officia."
        },
        {
          "username": "Chavez",
          "name": {
            "first": "Miriam",
            "last": "Shields"
          },
          "company": "ZILLADYNE",
          "city": "Ahwahnee",
          "email": "miriam.shields@zilladyne.org",
          "content": "Eu in reprehenderit elit minim sunt anim enim sit. Do dolor reprehenderit in eiusmod esse pariatur in ipsum voluptate sint est laboris. Nulla labore nisi irure reprehenderit adipisicing sint proident ad aliqua. Tempor dolor proident consequat ea fugiat cillum labore. Laboris eu esse occaecat nulla nisi mollit velit deserunt sit labore ex incididunt sint commodo."
        }
      ]
    }
  ]
  ; 
$scope.newComment = {};
var post = PostFactory.getPost($routeParams.id, posts );
  $scope.title = post.name;
  $scope.comments = post.comments;

  $scope.addComment = function(){
  $scope.comments.push($scope.newComment);
$scope.newComment = {};


  }
});
