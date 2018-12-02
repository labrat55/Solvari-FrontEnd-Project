new Vue({

    el: "#app",

    data: {
        search: '',
       teams: [
            {
                "first_name": "Dennis",
                "last_name": "van den Bos",
                "function": "Management",
                "department": "",
                "linkedin_url": "https:\/\/www.linkedin.com\/in\/dennis-van-den-bos-63850a12\/",
                "photo": "https:\/\/res.cloudinary.com\/solvari\/image\/upload\/c_thumb%2Cf_auto\/v1509008364\/production\/images\/nl-NL\/user\/2646"
  },

            {
                "first_name": "Joost",
                "last_name": "van der Meijden",
                "function": "Lead developer",
                "department": "Development",
                "linkedin_url": "",
                "photo": "https:\/\/res.cloudinary.com\/solvari\/image\/upload\/c_thumb%2Cf_auto\/v1508935191\/production\/images\/nl-NL\/user\/3667"
  },
            {
                "first_name": "Peter",
                "last_name": "Hofman",
                "function": "Developer",
                "department": "Development",
                "linkedin_url": "",
                "photo": "https:\/\/res.cloudinary.com\/solvari\/image\/upload\/c_thumb%2Cf_auto\/v1508936366\/production\/images\/nl-NL\/user\/31029"
  },
            {
                "first_name": "Vincent",
                "last_name": "Hendriks",
                "function": "Developer",
                "department": "Development",
                "linkedin_url": "",
                "photo": ""
  },
            {
                "first_name": "Tristan",
                "last_name": "Franzen",
                "function": "Servicemedewerker",
                "department": "Service",
                "linkedin_url": "",
                "photo": "https:\/\/res.cloudinary.com\/solvari\/image\/upload\/c_thumb%2Cf_auto\/v1511376756\/production\/images\/nl-NL\/user\/95605"
  },

            {
                "first_name": "Roy",
                "last_name": "van Oostrom",
                "function": "Accountmanager",
                "department": "Sales",
                "linkedin_url": "",
                "photo": ""
  },
            {
                "first_name": "Daniel",
                "last_name": "Heymann",
                "function": "Servicemedewerker",
                "department": "Service",
                "linkedin_url": "",
                "photo": "https:\/\/res.cloudinary.com\/solvari\/image\/upload\/c_thumb%2Cf_auto\/v1509008265\/production\/images\/nl-NL\/user\/71814"
  },
            {
                "first_name": "Gilberto",
                "last_name": "Boekhout",
                "function": "Accountmanager",
                "department": "Sales",
                "linkedin_url": "https:\/\/www.linkedin.com\/in\/gilberto-boekhout-11978b7b\/",
                "photo": "https:\/\/res.cloudinary.com\/solvari\/image\/upload\/c_thumb%2Cf_auto\/v1508937626\/production\/images\/nl-NL\/user\/1035"
  },
            {
                "first_name": "Leonie",
                "last_name": "de Korte",
                "function": "HR-manager",
                "department": "Management",
                "linkedin_url": "",
                "photo": "https:\/\/res.cloudinary.com\/solvari\/image\/upload\/c_thumb%2Cf_auto\/v1509008489\/production\/images\/nl-NL\/user\/1018"
  },
            {
                "first_name": "Lenneke",
                "last_name": "Manschot",
                "function": "Content & social marketeer",
                "department": "Marketing",
                "linkedin_url": "https:\/\/www.linkedin.com\/in\/lennekedegroot\/",
                "photo": ""
  },
            {
                "first_name": "Lisa",
                "last_name": "Versloot",
                "function": "Manager Serviceteam",
                "department": "Service",
                "linkedin_url": "",
                "photo": "https:\/\/res.cloudinary.com\/solvari\/image\/upload\/c_thumb%2Cf_auto\/v1509008729\/production\/images\/nl-NL\/user\/18929"
  }


        ]

    },
     created() {
    this.team = this.teams;
  },
   
       computed: {
            filteredTeams: function () {
                return this.teams.filter((team) => {
                    return team.first_name.toLowerCase().indexOf(this.search.toLowerCase()) >-1
                })
            }
        },
            
   


});
