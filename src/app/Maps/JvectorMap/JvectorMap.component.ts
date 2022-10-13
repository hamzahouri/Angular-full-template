import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'anglo-jvector-map',
  templateUrl: './JvectorMap.component.html',
  styleUrls: ['./JvectorMap.component.scss']
})
export class JvectorMapComponent implements OnInit {

	constructor() { }

	ngOnInit() {
			setTimeout(()=>{
			$('#vmap').vectorMap(
				{
					map: 'world_en',
					backgroundColor: '#FFFFFF',
					borderOpacity: 0.25,
					borderWidth: 1,
					color: '#5D92F4',
					enableZoom: true,
					hoverColor: 'false',
					hoverOpacity: 0.7,
					normalizeFunction: 'polynomial',
					scaleColors: ["#C8EEFF", "#0071A4"],
					selectedColor: '#5D92F4',
					selectedRegions: null,
					showTooltip: true,
					onRegionClick: function(element, code, region)
						{
					    var message = 'You clicked "'
					        + region
					        + '" which has the code: '
					        + code.toUpperCase();

					    alert(message);
					  },
					onRegionOver: function(event, code, region)
						{

						},
				});
		},200)
	}

}
