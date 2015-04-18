var play1Ships;
var play2Ships;

var play1HitShips;
var play2HitShips;

var play1MissShips;
var play2MissShips;

var isPlayer1Turn;

var ifInProgress;

var isPlayer1Won;
var isPlayer2Won;





function game ()
{

	this.play1Ships = new Array();
    this.play2Ships = new Array();

    this.play1HitShips = new Array();
    this.play2HitShips = new Array();

	this.play1MissShips = new Array();
	this.play2MissShips = new Array();

	this.isPlayer1Turn=true;

	this.ifInProgress=false;

	this.isPlayer1Won=false;
	this.isPlayer2Won=false;



	this.createShipWithSize=function(size,player)
	{
		if(player=="player1")
		{
			//0-99
			var randomPos=Math.floor((Math.random() * 100) + 0);
			//0-1
			var randomDirection=Math.floor((Math.random() * 2) + 0);

			if(this.isPosAvailable(randomPos,"player1",randomDirection,size))
			{
				if(randomDirection ==0)
				{
					for(var i=0;i<size;i++)
					{
						play1Ships.push(randomPos);
						randomPos++;
					}
				}
				else
				{
					for(var i=0;i<size;i++)
					{
						play1Ships.push(randomPos);
						randomPos+=10;
					}

				}
			}
			else
			{
				//
				this.createShipWithSize(size,player);

			}


		}
		else
		{
			//0-99
			var randomPos=Math.floor((Math.random() * 100) + 0);
			//0-1
			var randomDirection=Math.floor((Math.random() * 2) + 0);

			if(this.isPosAvailable(randomPos,"player2",randomDirection,size))
			{
				if(randomDirection ==0)
				{
					for(var i=0;i<size;i++)
					{
						play2Ships.push(randomPos);
						randomPos++;
					}
				}
				else
				{
					for(var i=0;i<size;i++)
					{
						play2Ships.push(randomPos);
						randomPos+=10;
					}

				}
			}
			else
			{
				//
				this.createShipWithSize(size,player);

			}

		}
	}

	this.isPosAvailable=function(pos,player,direction,size)
	{
		if(player=="player1")
		{
			if(direction==0)
			{
				var position=pos;
				var finalpos=position+size;
				if(position.length == 1)
				{
					if(finalpos.length != 1)
					{
						return false;
					}
				}
				else
				{ 
					// take the last digit of the number
					var lastDigit1 = position.substring(1,2);
					var lastDigit2 = finalpos.substring(1,2);

					if(parseInt(lastDigit2)<parseInt(lastDigit1))
					{
						return false;
					}
				}
				for (var i=0;i<size;i++)
				{
					for(var j=0;j<this.play1Ships.length;j++)
					{
						if(position==this.play1Ships[j])
						{
							return false;
						}
					}
					position++;
				}
			}
			else
			{
				var position=pos;
				for(var i=0;i<size;i++)
				{
					for(var j=0;j<this.play1Ships.length;j++)
					{
						if(position==this.play1Ships[j])
						{
							return false;
						}

					}
					if(position+10>99)
					{
						return false;
					}
					else
					{
						position+=10;
					}
				}
			}
		}
		else
		{

			if(direction==0)
			{
				var position=pos;
				var finalpos=position+size;
				if(position.length == 1)
				{
					if(finalpos.length != 1)
					{
						return false;
					}
				}
				else
				{ 
					// take the last digit of the number
					var lastDigit1 = position.substring(1,2);
					var lastDigit2 = finalpos.substring(1,2);

					if(parseInt(lastDigit2)<parseInt(lastDigit1))
					{
						return false;
					}
				}
				for (var i=0;i<size;i++)
				{
					for(var j=0;j<this.play2Ships.length;j++)
					{
						if(position==this.play2Ships[j])
						{
							return false;
						}
					}
					position++;
				}
			}
			else
			{
				var position=pos;
				for(var i=0;i<size;i++)
				{
					for(var j=0;j<this.play2Ships.length;j++)
					{
						if(position==this.play2Ships[j])
						{
							return false;
						}

					}
					if(position+10>99)
					{
						return false;
					}
					else
					{
						position+=10;
					}
				}
			}

		}
	}




	




}