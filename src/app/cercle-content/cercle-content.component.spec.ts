import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleContentComponent } from './cercle-content.component';

describe('CercleContentComponent', () => {
  let component: CercleContentComponent;
  let fixture: ComponentFixture<CercleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CercleContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CercleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
