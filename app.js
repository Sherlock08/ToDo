(function(){

angular.module('ToDoApp',[])
.controller('ToDoController',ToDoController)
.controller('DoneController',DoneController)
.service('CheckOffService',CheckOffService);

ToDoController.$inject=['CheckOffService'];
function ToDoController(CheckOffService){
    var toDoController=this;
    toDoController.task="";

    toDoController.add=function(){
        console.log(toDoController.task);
        CheckOffService.addTask(toDoController.task);
        toDoController.task="";
    };
    // toDoController.items.name="";
    // toDoController.items.quantity=0;
    toDoController.items=CheckOffService.getToBuyList();

    toDoController.populate=function(itemIndex)
    {
        CheckOffService.populate(itemIndex);
    };
    
};



DoneController.$inject=['CheckOffService'];
function DoneController(CheckOffService){
    var alreadyBoughtController=this;
    alreadyBoughtController.removedList=[];
    alreadyBoughtController.removedList.name="";
    alreadyBoughtController.removedList.quantity=0;
    alreadyBoughtController.removedList=CheckOffService.getBoughtList();
};


function CheckOffService()
{   
    var checkOffService=this;
    var toDo=[];
    // var toBuy=[
    // {
    //     name : "Cookies",
    //     quantity : 10
    // },
    // {
    //     name : "Icecream",
    //     quantity : 4
    // },
    // {
    //     name : "Chips",
    //     quantity : 2
    // },
    // {
    //     name : "Sandwiches",
    //     quantity : 2
    // },
    // {
    //     name : "Cokes",
    //     quantity : 3
    // }
    // ];

    var bought=[];

    checkOffService.addTask=function(task){
        toDo.push(task);
    }
    checkOffService.getToBuyList=function(){
        return toDo;
    };

    checkOffService.populate=function(itemIndex){

        bought.push(toDo[itemIndex]);
        toDo.splice(itemIndex,1);
        
    };
    checkOffService.getBoughtList=function(){
        return bought;
    };
};




})();