class CreateSubscriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :subscriptions do |t|
      t.string :name
      t.string :price
      t.string :paymentDate
      t.string :plan

      t.timestamps
    end
  end
end
