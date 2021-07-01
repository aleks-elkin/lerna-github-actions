import { ChildComponent1 } from "@aleks-elkin/test-lerna-repo.child-component-1";
import { ChildComponent2 } from "@aleks-elkin/test-lerna-repo.child-component-2";
export class MainComponent {

	private internalId = "test_monorepo";
	private childComponent1: ChildComponent1;
	private childComponent2: ChildComponent2;

	public get id() {
		return `${this.childComponent1.id}_+_${this.childComponent2}`;
	}
	
	constructor() {
		this.childComponent1 = new ChildComponent1(this.internalId);
		this.childComponent2 = new ChildComponent2(this.internalId);
	}
}