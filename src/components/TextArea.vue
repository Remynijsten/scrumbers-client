<template>
	<textarea :maxlength="max" :type="$props.type" :name="$props.name" :placeholder="$props.placeholder" :value="value" @input="updateValue($event.target.value)"></textarea>
</template>

<script>
export default {
	name : "TextArea",
	props: {
		name : String,
		type : String,
		placeholder: String,
		value: String,
		max: String
	},
	methods: {
		updateValue(value)
		{
			this.$emit('input', value)
		}
	}
}
</script>