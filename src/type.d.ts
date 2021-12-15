type Category = '-' | '+'

type MyTag = {
	id: number,
	tag: ReactElement
}

type TagProps = {
	value: number
	onChangeTag: (newTagId: number) => void
}

type NoteProps = {
	value: string
	onChangeNote: (newNote: string) => void
}

type CategoryProps = {
	value: Category
	onChangeCategory: (newCategory: Category) => void
}

type DateProps={
	value: Date
	onChangeDate: (newDate: Date) => void
}

type NumberPadProps = {
	value: number
	onChange: (value: number) => void
	onOk?: () => void
}