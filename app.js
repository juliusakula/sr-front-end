angular.module('myApp',['yaru22.md', 'mgcrea.ngStrap', 'uiGmapgoogle-maps']).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    http://angular-ui.github.io/angular-google-maps/#!/api/GoogleMapApi
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}).service('selectedTrip',
function(){
    this.selected = "";
    this.setSelected = function(newVal){
        this.selected = newVal;
    }
    this.getSelected = function(){
        return this.selected;
    }
}
).service('allEvents',
function(){
    this.events = [{ 
            name: "Singapore October Seminar",
            orderId: "E1Singapore",
            location: "Singapore, Singapore",
            date: "10-08-2015",
            shortDescription: "Sample Text seminars human factors and other words about airplanes.",
            description: "Sample Text seminars human factors and other words about airplanes. Lorem ipsum dolor, sit amet, consectetur adipiscing elit. Aliquam purus ipsum, ornare nec ultricies eu, aliquet eu velit. Nulla venenatis sem a justo volutpat, tincidunt volutpat tortor cursus. Maecenas vestibulum viverra gravida. Morbi non tincidunt odio. Cras viverra tincidunt magna sit amet commodo. Vestibulum mi orci, sollicitudin nec dui eu, egestas imperdiet magna. Nunc posuere semper iaculis. Nunc facilisis odio at ipsum tempor ultricies. Nam imperdiet mi commodo enim ullamcorper, non consectetur justo pharetra. Nam mauris sapien, tempus vel semper vel, ultricies eu ex.",
            map_loc: { center: { latitude: 1.3147308, longitude: 103.8470128 }, zoom: 12 }, // location of map to zoom
            marker_loc: { center: { latitude: 1.3147308, longitude: 103.8470128 } }, // need seperate marker coords because the map_loc one changes and then the marker always stays in middle of the viewport if you use the same coord variable for both https://github.com/angular-ui/angular-google-maps/issues/1018
            price: 2500, //also must be configured in braintree.php
            link: ""
        },{ 
            name: "Singapore October Seminar",
            orderId: "E1Singapore",
            location: "Singapore, Singapore",
            date: "10-08-2015",
            shortDescription: "Sample Text seminars human factors and other words about airplanes.",
            description: "Sample Text seminars human factors and other words about airplanes. Lorem ipsum dolor, sit amet, consectetur adipiscing elit. Aliquam purus ipsum, ornare nec ultricies eu, aliquet eu velit. Nulla venenatis sem a justo volutpat, tincidunt volutpat tortor cursus. Maecenas vestibulum viverra gravida. Morbi non tincidunt odio. Cras viverra tincidunt magna sit amet commodo. Vestibulum mi orci, sollicitudin nec dui eu, egestas imperdiet magna. Nunc posuere semper iaculis. Nunc facilisis odio at ipsum tempor ultricies. Nam imperdiet mi commodo enim ullamcorper, non consectetur justo pharetra. Nam mauris sapien, tempus vel semper vel, ultricies eu ex.",
            map_loc: { center: { latitude: 1.3147308, longitude: 103.8470128 }, zoom: 12 }, // location of map to zoom
            marker_loc: { center: { latitude: 1.3147308, longitude: 103.8470128 } }, // need seperate marker coords because the map_loc one changes and then the marker always stays in middle of the viewport if you use the same coord variable for both https://github.com/angular-ui/angular-google-maps/issues/1018
            price: 2500, //also must be configured in braintree.php
            link: ""
        },{ 
            name: "Salisbury Seminar",
            orderId: "E2Salisbury",
            location: "Salisubry, England",
            date: "01-08-2016",
            shortDescription: "Sample Text seminars human factors and other words about airplanes.",
            description: "Sample Text seminars human factors and other words about airplanes. Lorem ipsum dolor, sit amet, consectetur adipiscing elit. Aliquam purus ipsum, ornare nec ultricies eu, aliquet eu velit. Nulla venenatis sem a justo volutpat, tincidunt volutpat tortor cursus. Maecenas vestibulum viverra gravida. Morbi non tincidunt odio. Cras viverra tincidunt magna sit amet commodo. Vestibulum mi orci.",
            map_loc: { center: { latitude: 51.0698569, longitude: -1.7912405 }, zoom: 12 }, // location of map to zoom
            marker_loc: { center: { latitude: 51.0698569, longitude: -1.7912405 } }, // need seperate marker coords because the map_loc one changes and then the marker always stays in middle of the viewport if you use the same coord variable for both https://github.com/angular-ui/angular-google-maps/issues/1018
            price: 2500, //also must be configured in braintree.php
            link: ""
        }];
    this.addEvent = function(newVal){
        this.events.push(newVal);
        return this.events;
    }
    this.getEvents = function(){
        return this.events;
    }
}
).controller('secondArea', function($scope, $http){
    $scope.mdText ="asdf";
    //$http({method: "GET", url: "md/ktc.md"}).success(function(data, status, headers, config) {
    //   $scope.mdText = data;
    //});
}).controller('eventsArea', function($scope, $http, allEvents){
    $scope.events =  allEvents.events;
    
}).controller('firstArea', function($scope, selectedTrip, allEvents){
    $scope.welcomeMessage = "You're just five minutes from the best event of your life";
    $scope.i = 0
    $scope.selected =  selectedTrip.selected
    $scope.inputs = [
        {   
            type: "text",
            _name: "Name",
            val: $scope.selected
        },
        {   
            type: "password",
            _name: "secure password",
            val: ""
        },
        {   
            type: "text",
            _name: "email address",
            val: ""
        },
        {   
            type: "text",
            _name: "birth date",
            val: ""
        }
    ];
    
    var eventsQuestions = [
        {   
            type: "text",
            _name: "Event Name",
            val: $scope.selected
        },
        {   
            type: "text",
            _name: "Event host",
            val: ""
        },
        {   
            type: "text",
            _name: "Event start date and time",
            val: ""
        },
        {   
            type: "text",
            _name: "Event end date and time",
            val: ""
        },
        {   
            type: "text",
            _name: "Guest list",
            val: ""
        },
        {   
            type: "text",
            _name: "Location",
            val: ""
        },
        {   
            type: "text",
            _name: "Description",
            val: ""
        },
        {   
            type: "text",
            _name: "(optional) message",
            val: ""
        }
    ];
    $scope.create_event_inputs = eventsQuestions;
    $scope.create_event = function(){
        newObj = {
            map_loc: { center: { latitude: 51.0698569, longitude: -1.7912405 }, zoom: 12 }, // location of map to zoom
            marker_loc: { center: { latitude: 51.0698569, longitude: -1.7912405 } }, // need seperate marker coords because the map_loc one changes and then the marker always stays in middle of the viewport if you use the same coord variable for both https://github.com/angular-ui/angular-google-maps/issues/1018
            price: 2500
        };
        /* { 
            name: "Salisbury Seminar",
            orderId: "E2Salisbury",
            location: "Salisubry, England",
            date: "01-08-2016",
            shortDescription: "Sample Text seminars human factors and other words about airplanes.",
            description: "Sample Text seminars human factors and other words about airplanes. Lorem ipsum dolor, sit amet, consectetur adipiscing elit. Aliquam purus ipsum, ornare nec ultricies eu, aliquet eu velit. Nulla venenatis sem a justo volutpat, tincidunt volutpat tortor cursus. Maecenas vestibulum viverra gravida. Morbi non tincidunt odio. Cras viverra tincidunt magna sit amet commodo. Vestibulum mi orci.",
            map_loc: { center: { latitude: 51.0698569, longitude: -1.7912405 }, zoom: 12 }, // location of map to zoom
            marker_loc: { center: { latitude: 51.0698569, longitude: -1.7912405 } }, // need seperate marker coords because the map_loc one changes and then the marker always stays in middle of the viewport if you use the same coord variable for both https://github.com/angular-ui/angular-google-maps/issues/1018
            price: 2500, //also must be configured in braintree.php
            link: ""
        } */
        for(i = 0; i < $scope.create_event_inputs.length; i++){
            property = $scope.create_event_inputs[i];
            console.log(property._name + "=" + property.val);
            if(property._name == 'Event Name'){
                newObj.name = property.val;
            }
            else if(property._name == 'Location'){
                newObj.location = property.val;
            }
            else if(property._name == 'Event start date and time'){
                newObj.date = property.val;
            }
            else if(property._name == 'Description'){
                newObj.description = property.val;
            }
            else if(property._name == '(optional) message'){
                newObj.shortDescription = property.val;
            }
        }
        console.log(allEvents.events);
        console.log(newObj);
        allEvents.addEvent(newObj);
        console.log(allEvents.events);
    }
})