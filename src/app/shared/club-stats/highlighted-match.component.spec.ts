import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedMatchComponent } from './highlighted-match.component';

describe('HighlightedMatchComponent', () => {
  let component: HighlightedMatchComponent;
  let fixture: ComponentFixture<HighlightedMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedMatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightedMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
