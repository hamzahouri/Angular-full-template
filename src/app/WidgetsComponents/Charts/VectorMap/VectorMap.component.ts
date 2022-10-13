import { Component, OnInit, Input } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'anglo-vector-map',
  templateUrl: './VectorMap.component.html',
  styleUrls: ['./VectorMap.component.scss']
})

export class VectorMapComponent implements OnInit {

	@Input() color : any;
	constructor() { }

	ngOnInit() {
		setTimeout(()=>{
			$('#vmap').vectorMap(
				{
					map: 'world_en',
					backgroundColor: '#FFF',
					borderOpacity: 0.25,
					borderWidth: 1,
					color: this.color,
					enableZoom: false,
					hoverColor: 'false',
					zoomButtons: false,
					hoverOpacity: 0.7,
					normalizeFunction: 'polynomial',
					scaleColors: ["#C8EEFF", "#0071A4"],
					selectedColor: this.color,
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
