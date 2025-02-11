import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

function maxSelectedCheckboxes(control: AbstractControl): {[key: string] : any} | null{
  let boxesArr = [...control.value];
  let totalCheckedBoxes = boxesArr.filter(box => box).length;
  if(totalCheckedBoxes > 4){
    return { errorMessage: 'You have selected more than 4 colors.'};
  }

  return null;
}

@Component({
  selector: 'app-buildletter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './buildletter.component.html',
  styleUrl: './buildletter.component.css'
})
export class BuildletterComponent implements OnInit{
  displayBL: boolean = false;
  comingSoon: boolean = true;

  textLetter: string = "HERA was the Olympian queen of the gods.";
  letterForm: FormGroup;
  themeOptions = [
    { themeId: 0, themeName: 'Birthday'},
    { themeId: 1, themeName: 'Christmas'},
    { themeId: 2, themeName: 'Harry Potter'}
  ];
  colors = [
    { id: 'C00', name: 'Black'}, 
    { id: 'C01', name: 'Purple'},
    { id: 'C02', name: 'Green'},
    { id: 'C03', name: 'Blue'}, 
    { id: 'C04', name: 'Pink'},
    { id: 'C05', name: 'Yellow'},
  ];

  constructor(private _shareDataService: ShareDataService, private _formBuilder: FormBuilder){
    this.letterForm = new FormGroup({
      backgroundColors: this._formBuilder.array(this.createColorCheckboxes(), maxSelectedCheckboxes),
      questionTheme : this._formBuilder.group({addTheme: ['', Validators.required]}),
      theme: new FormControl(''),
      text: new FormControl('')
    });
  }

  ngOnInit(): void {
    this._shareDataService.setSelectedGame('buildletter');
    console.log('Signal game selected: ', this._shareDataService.getSelectedGame());

      setTimeout(() => {
        this.displayBL = true;
      }, 2500);
  }

  createColorCheckboxes(){
    let boxes = this.colors.map(color => {
      return new FormControl(false, []);
    });
    return boxes; 
  }

  get backgroundColorsArray(){
    return this.letterForm.controls['backgroundColors'] as FormArray;
  }

  getObjectColors(){
    let tempColors = [...this.backgroundColorsArray.value];
    let colours = tempColors.map((value, index) => 
      value ? this.colors[index].name : null
    ).filter(name => name != null);
    return colours;
  }

  saveForm(): void{
    console.log('Form:: ', this.letterForm);
    console.log('Form is valid? ', this.letterForm.valid);
    let colors = this.getObjectColors();
  }

  submit(): void{

  }

}
