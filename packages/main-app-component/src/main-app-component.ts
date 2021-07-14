import { ChildComponent1 } from "@aleks-elkin/test-lerna-repo.child-component-1";
import { ChildComponent2 } from "@aleks-elkin/test-lerna-repo.child-component-2";
import { ChildComponent3 } from "@aleks-elkin/test-lerna-repo.child-component-3";
export class MainComponent {

	private internalId = "test_monorepo";
	private childComponent1: ChildComponent1;
	private childComponent2: ChildComponent2;
	private childComponent3: ChildComponent3;

	public get id() {
		return `${this.childComponent1.id}_+_${this.childComponent2}_+_${this.childComponent3}`;
	}
	
	constructor() {
		this.childComponent2 = new ChildComponent2(this.internalId);
		this.childComponent3 = new ChildComponent3(this.internalId);
		this.childComponent1 = new ChildComponent1(this.internalId);
	}
}