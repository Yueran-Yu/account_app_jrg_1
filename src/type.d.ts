type Category = '-' | '+'

type ParamsProps = {
	id: string
}

type MyTag = {
	id: number,
	tag: ReactElement
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

type TagListContextType = {
	expenseTags: MyTag[]
	incomeTags: MyTag[]
	onAddIncomeTags: (tag:MyTag) => void
	onAddExpenseTags:(tag:MyTag) => void
	ExpenseIconsList: MyTag[]
	IncomeIconsList: MyTag[]
}