/*
	Michael Mancuso
	SDI
	Project 2
*/

//misc vars
var currentIndex = 0;

//player numbers
var playerAttackDice = 20;
var playerMaxDamage = 5;
var playerCritChance = .1;

//combat messages
var hitMessage = "I hit the enemy";
var missMessage = "I missed the enemy";
var needToHit = "I need to hit the weak spot to do massive damage.";


//enemy stats
var enemyName = ["Goblin", "Ogre", "Demon"];
var enemyMaxHP = [10, 20, 30];
var enemyDefenseDice = [2, 7, 14];
var enemyStack = new Array();



//execution - in block only for visual difference
if (true) //always true
{
    main();
}

//main
function main()
{
    populateEnemyList();
    console.log("I am Pardeux, a Holy Man. I see many enemies in front of me.");
    listEnemies(enemyStack.length, enemyStack);

    
    while (enemyStack.length > 0)
    {
        var holder = enemyStack.pop();
        console.log("A "+ holder[0] + " appears");
        battle(holder[1], holder[2]);
    }
    
    console.log("Victory!");
}

//functions

//string function
function performCriticalHit(hit, crit)
{
    var firstString = hit;
    var connector = " for ";
    var secondString = crit.substr(34);
    
    return firstString.concat(connector, secondString);
}

//bool function
function hasHit(attackRoll, defenseRoll)
{
    if (attackRoll > defenseRoll)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//num function
function battle(hitpoints, defenseDice)
{

    var hp = hitpoints;
    while (hp > 0)
    {
        console.log("-- A new combat round begins. --");
        console.log("I attack.");
        /// YO ME LOOK HERE THE LINE BELOW IS HARD CODED
        if(hasHit(randomInt(0, playerAttackDice), randomInt(0, defenseDice)))
        {
            if (isCrit(playerCritChance))
            {
                hp -= (3 * randomInt(0, playerMaxDamage));
                console.log(performCriticalHit(hitMessage, needToHit));
                console.log("Enemy HP remaining: " + hp);
            }
            else
            {
                hp -= randomInt(0, playerMaxDamage);
                console.log(hitMessage);
                console.log("Enemy HP remaining: " + hp);
            }
        }
        else
        {
            console.log(missMessage);
            console.log("Enemy HP remaining: " + hp);
        }
        
        console.log("The enemy attacked this round, but...");
        console.log("I am Parduex. I take no damage.");
    }
    
    console.log("The enemy is defeated!")
}

//array function --WIP--
function listEnemies(max, enemyList)
{
    console.log("Enemies:");
    console.log("Name, HP, Defense");
    var i = max - 1;
    for (i; i > 0; i--)
    {
        console.log(enemyList[i]);   
    }
}

//extra utility functions
function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

function isCrit(critChance)
{
    if(Math.random() < critChance)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function populateEnemyList()
{
   var count = randomInt(2,5);
   for (count; count >=0; count--)
   {
        var rand = randomInt(0,2);
        enemyStack.push([enemyName[rand], enemyMaxHP[rand], enemyDefenseDice[rand]]);
   }
}
