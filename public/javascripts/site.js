/**
 * Created by neilhighley on 05/09/2015.
 */
var helpers=[{id:0,
    name:"Neeil",
    description:"local hero",
    location:"dog-cat-fish"},
    {id:1,
        name:"Carlos",
        description:"local superhero",
        location:"shoe-feet-cheese"},
    {id:2,
        name:"Martin",
        description:"elusive protector",
        location:"shield-sword-sparrow"}
];

var tasks_available=[
    { id:0,
        name:"I need a boat to get to the relief center",
        skills_required:["Boat","swimmer"],
        location:"free-fish-friday",
        accepted:false,
        accepted_by:[]},
    { id:1,
        name:"We need towels at the relief center",
        skills_required:["Boat","swimmer"],
        location:"good-green-girl",
        accepted:true,
        accepted_by:"Neil"},
    { id:2,
        name:"Doctor required for triage at the relief center",
        skills_required:["Boat","swimmer"],
        accepted:false,
        location:"good-green-girl"},
]
function usehelper(id){
    alert("Help manually requested");
    alert("Waiting for confirmation from "+helpers[id].name)
    document.location.href="/";
}

function usetask(id){
    alert("Task selected:"+tasks_available[id].name);
    document.location.href="/";
}
