type Category = '-' | '+'

type ParamsProps = {
	id: string
}

type MyTag = {
	id: number,
	tag: string
}

type TagProps = {
	value: number
	onChangeTag: (newTagId: number) => void
	selectedCategory: Category
}

type NoteProps = {
	value: string
	onChangeNote: (newNote: string) => void
}

type CategoryProps = {
	value: Category
	onChangeCategory: (newCategory: Category) => void
}

type DateProps = {
	value: Date
	onChangeDate: (newDate: Date) => void
}

type NumberPadProps = {
	value: number
	onChange: (value: number) => void
	onOk?: () => void
}

type TagsListContextType = {
	expenseTags: MyTag[]
	incomeTags: MyTag[]
	onAddIncomeTags: (tag: MyTag) => void
	onAddExpenseTags: (tag: MyTag) => void
	TotalExpenseTagsList: MyTag[]
	TotalIncomeTagsList: MyTag[]
}

type HashMapType = {
	[key: string]: ReactElement;
}

type AccountState = {
	tagId: number
	note: string
	date: string
	category: Category
	amount: number
}