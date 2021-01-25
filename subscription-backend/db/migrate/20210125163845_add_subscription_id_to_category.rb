class AddSubscriptionIdToCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :subscription_id, :integar
  end
end
