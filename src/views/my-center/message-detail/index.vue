<template>
<el-row class="app-container">
    <el-tabs v-model="activeName">
        <el-tab-pane label="消息详情" name="message">
            <el-row class="table-wrapper">
                <el-table
                        v-loading="loading"
                        :data="tableData"
                        border
                >
                    <el-table-column
                            v-for="(col,idx) in columns"
                            :key="idx"
                            :prop="col.prop"
                            :label="col.label"
                            :formatter="col.formatter"
                    />
                </el-table>
            </el-row>
        </el-tab-pane>
    </el-tabs>
</el-row>
</template>

<script>
    export default {
        name: "MessageCenter",
        data() {
            return {
                activeName: 'message',
                loading: false,
                tableData: [],
                columns: [
                    {
                        label: '类型',
                        prop: 'type'
                    },
                    {
                        label: '主题',
                        prop: 'theme'
                    },
                    {
                        label: '日期',
                        prop: 'date'
                    },
                    {
                        label: '状态',
                        prop: 'status',
                        formatter: (row, key) => {
                            if (row[key] === 0) {
                                return '未读'
                            }
                            return '已读'
                        }
                    },
                ]
            }
        },
        methods: {
            getMessageList() {
                this.loading = true
                this.tableData = [
                    {
                        type: '母子关系绑定',
                        theme: '【通知】母子关系绑定通知',
                        date: '2020-11-16',
                        status: '未读'
                    }
                ]
                this.loading = false
            }
        },
        created() {
            this.getMessageList()
        }
    }
</script>

<style lang="scss" scoped>
.app-container {
    padding: 20px;
    .form-wrapper {
        .form-group {
            ::v-deep .el-form-item__content {
                width: 370px;
                .form-control {
                    width: 100%;
                }
            }
        }
        .btn-group {
            padding-left: 90px;
        }
    }
    .table-wrapper {
        margin: 15px 0;
    }
    .page-wrapper {
        margin: 15px 0;
        .el-pagination {
            text-align: right;
        }
    }
}
</style>
