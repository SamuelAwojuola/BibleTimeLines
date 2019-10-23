	$('#btnChrist').click(function()
	{
		//check if the class is display:block, then make it display:none//
		var christ = $('.christ')
		if (christ.css('display') == 'block')
		{
		//if you are making it display:none, check if any of its siblings is display:block. If there is none of its siblings display:block, then hide their parent container//
			christ.css('display','none');
			christ.each(function()
			{
				if ( $(this).siblings(':visible').length > 0)
				{
					$(this).parent().css('display','block');
				}
				else
				{
					$(this).parent().css('display','none');
				}
			});
		}
		else
		{
		//if the display:none, then make it display:block and also, since its parent may be hidden, makes its parent display:block //
			christ.css('display','block');christ.parent().css('display','block');
		}
	});

	$('#btnSeals').click(function()
		{
			var seals = $('.seven-seals')
			if (seals.css('display') == 'block')
			{
				seals.css('display','none');
				seals.each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				seals.css('display','block');seals.parent().css('display','block');
			}
	});

	$('#btnTrumpets').click(function()
		{
			var trumpets = $('.seven-trumpets')
			if (trumpets.css('display') == 'block')
			{
				trumpets.css('display','none');
				trumpets.each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				trumpets.css('display','block');trumpets.parent().css('display','block');
			}
	});
	
	$('#btnBowls').click(function()
		{
			if ($('.bowlsofwrath').css('display') == 'block')
			{
				$('.bowlsofwrath').css('display','none');
				$('.bowlsofwrath').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.bowlsofwrath').css('display','block');$('.bowlsofwrath').parent().css('display','block');
			}
	});
	
	$('#openings').click(function()
		{
			if ($('.opening').css('display') == 'block')
			{
				$('.opening').css('display','none');
				$('.opening').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.opening').css('display','block');$('.opening').parent().css('display','block');
			}
	});

	$('#satan').click(function()
		{
			if ($('.satan').css('display') == 'block')
			{
				$('.satan').css('display','none');
				$('.satan').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.satan').css('display','block');$('.satan').parent().css('display','block');
			}
	});

	$('#beast').click(function()
		{
			if ($('.beast').css('display') == 'block')
			{
				$('.beast').css('display','none');
				$('.beast').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.beast').css('display','block');$('.beast').parent().css('display','block');
			}
	});

	$('#144000').click(function()
		{
			if ($('._144000').css('display') == 'block')
			{
				$('._144000').css('display','none');
				$('._144000').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('._144000').css('display','block');$('._144000').parent().css('display','block');
			}
	});
	
	$('#resurrection').click(function()
		{
			if ($('.resurrection').css('display') == 'block')
			{
				$('.resurrection').css('display','none');
				$('.resurrection').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.resurrection').css('display','block');$('.resurrection').parent().css('display','block');
			}
	});
	
	$('#abyss').click(function()
		{
			if ($('.abyss').css('display') == 'block')
			{
				$('.abyss').css('display','none');
				$('.abyss').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.abyss').css('display','block');$('.abyss').parent().css('display','block');
			}
	});
	
	$('#times').click(function()
		{
			if ($('.time').css('display') == 'block')
			{
				$('.time').css('display','none');
				$('.time').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.time').css('display','block');$('.time').parent().css('display','block');
			}
	});
	
	$('#jerusalem').click(function()
		{
			if ($('.jerusalem').css('display') == 'block')
			{
				$('.jerusalem').css('display','none');
				$('.jerusalem').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.jerusalem').css('display','block');$('.jerusalem').parent().css('display','block');
			}
	});	

	$('#saints').click(function()
		{
			if ($('.saints').css('display') == 'block')
			{
				$('.saints').css('display','none');
				$('.saints').each(function()
				{
					if ( $(this).siblings(':visible').length > 0) 
					{
						$(this).parent().css('display','block');
					}
					else
					{
						$(this).parent().css('display','none');
					}
				});
			}
			else
			{
				$('.saints').css('display','block');$('.saints').parent().css('display','block');
			}
	});
