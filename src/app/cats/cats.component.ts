import {Component, OnInit} from '@angular/core';
import {Cat} from './cat';
import {FormBuilder ,FormGroup} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: Cat[] = [new Cat(1, 'Fluffy', 12, 3), new Cat(2, 'Sparkles', 5, 4)];

  newCatForm: FormGroup;
  newCatModal;
  private idCounter = 2;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
  }

  ngOnInit() {}

  openNewCatForm(modal) {
    this.createNewCatForm();
    this.newCatModal = this.modalService.open(modal);
  }

  createNewCatForm() {
    this.newCatForm = this.fb.group({
      name: '',
      age: '',
      weight: ''
    });
  }

  addCat() {
    const formModel = this.newCatForm.value;
    this.cats.push(new Cat(this.idCounter++, formModel.name, formModel.age, formModel.weight));
    this.newCatModal.close();
  }

  removeCat(id){
    const index = this.cats.findIndex(cat => cat.id === id);
    this.cats.splice(index, 1);
  }
}
